using System.IO;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Azure.WebJobs.Extensions.OpenApi.Core.Attributes;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using Newtonsoft.Json;

using System;
using Microsoft.Identity.Client;
using Azure.Core;
using Azure.Identity;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Azure.WebJobs.Extensions.OpenApi.Core.Enums;
using Microsoft.Xrm.Sdk;


namespace Contoso.PrioritZ
{
    public class CreateTopic
    {
        private readonly ILogger<CreateTopic> _logger;

        public CreateTopic(ILogger<CreateTopic> log)
        {
            _logger = log;
        }

        [FunctionName("CreateTopic")]
        [OpenApiOperation(operationId: "CreateTopic", tags: new[] { "name" }, Summary = "Create Topic", Description = "Create Topic", Visibility = OpenApiVisibilityType.Important)]
        [OpenApiSecurity("function_key", SecuritySchemeType.ApiKey, Name = "code", In = OpenApiSecurityLocationType.Query)]
        [OpenApiResponseWithBody(statusCode: HttpStatusCode.OK, contentType: "application/json", bodyType: typeof(Guid), Description = "The Guid response")]
        [OpenApiRequestBody(contentType: "application/json", bodyType: typeof(TopicModel))]

        public async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = null)] HttpRequest req)
        {
            _logger.LogInformation("Starting Create Topic");

            var serviceClient = new ServiceClient(
                  instanceUrl: new Uri(Environment.GetEnvironmentVariable("DataverseUrl")),
                  tokenProviderFunction: async uri => { return await GetAccessTokenAsync(req, Environment.GetEnvironmentVariable("DataverseUrl")); },
                  useUniqueInstance: true,
                  logger: _logger);

            if (!serviceClient.IsReady)
            {
                throw new Exception("Authentication Failed!");
            }

            string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
            var data = JsonConvert.DeserializeObject<TopicModel>(requestBody);

            var ask = new Entity("contoso_prioritztopic");
            ask["contoso_topic"] = data.Topic;
            ask["contoso_details"] = data.Details;
            ask["contoso_mynotes"] = data.MyNotes;
            ask["contoso_respondby"] = data.RespondBy.Date;
            if (data.Photo != null)
            {
                // Remove unnecessary double quotes,
                // Remove everything before the first comma (embedded stuff)
                ask["contoso_photo"] = Convert.FromBase64String(data.Photo.Trim('\"').Split(',')[1]);
            }
            var topicId = await serviceClient.CreateAsync(ask);

            foreach (var choice in data.Choices)
            {
                var item = new Entity("contoso_prioritztopicitem");
                item["contoso_choice"] = choice.Choice;
                item["contoso_prioritztopic"] = new EntityReference("contoso_prioritztopic", topicId);
                if (choice.Photo != null)
                {
                    item["contoso_photo"] = Convert.FromBase64String(choice.Photo.Trim('\"').Split(',')[1]);
                }

                var choiceId = await serviceClient.CreateAsync(item);
            }
            return new OkObjectResult(topicId);
        }

        public static async Task<string> GetAccessTokenAsync(HttpRequest req, string resourceUri)
        {
            //Get the calling user token from the request to use as UserAssertion
            var headers = req.Headers;
            var token = string.Empty;
            if (headers.TryGetValue("Authorization", out var authHeader))
            {
                if (authHeader[0].StartsWith("Bearer "))
                {
                    token = authHeader[0].Substring(7, authHeader[0].Length - 7);
                }
            }

            string[] scopes = new[] { $"{resourceUri}/.default" };
            string clientSecret = Environment.GetEnvironmentVariable("ClientSecret");
            string clientId = Environment.GetEnvironmentVariable("ClientID");
            string tenantId = Environment.GetEnvironmentVariable("TenantID");

            var app = ConfidentialClientApplicationBuilder.Create(clientId)
              .WithClientSecret(clientSecret).WithAuthority($"https://login.microsoftonline.com/{tenantId}")
              .Build();
            //Get On Behalf Of Token for calling user
            UserAssertion userAssertion = new UserAssertion(token);
            var result = await app.AcquireTokenOnBehalfOf(scopes, userAssertion).ExecuteAsync();

            return result.AccessToken;
        }

    }
}

