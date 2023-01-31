---
sidebar_position: 1
title: 2. Function Implementation
---

:::info LAB SCENARIO

Working as part of the PrioritZ fusion team you will be configuring a custom connector for a new API you build using Azure Functions. The team has decided to move the logic when a user creates a new “ask” to the Azure Function API. This will keep the Power App formula simple and allow more complex logic to be added in the future. In this lab you will create the function, use the Dataverse API, secure the API with Azure AD, configure a custom connector to use the API, and change the Power App to use the connector.

In **Exercise 2** you will implement the function.
:::

:::tip Important
This lab requires an 🅰️**Azure subscription (or trial)** in the **same tenant** as your Dataverse environment.
:::


## 1.1 Implement Function
1.	Click **New file**.

![Lab-04 Image](./img/lab04%20(9).jpg)


2.	Name the new file `Model.cs`

![Lab-04 Image](./img/lab04%20(10).jpg)

3.	Open the new `Model.cs` file and paste the code below. This will define the data that will be sent from the Power App.

```js
using System;
using Microsoft.Azure.WebJobs.Extensions.OpenApi.Core.Attributes;
using Microsoft.OpenApi.Models;
namespace Contoso.PrioritZ
{
 public class TopicItemModel
  {
    public string Choice { get; set; }
    public string Photo { get; set; }
  }
  public class TopicModel
  {
    [OpenApiProperty(Nullable = false, Description = "This is a topic")]
    public string Topic { get; set; }
    public string Details { get; set; }
    public DateTime RespondBy { get; set; }
    public string MyNotes { get; set; }
    public string Photo { get; set; }
    public TopicItemModel[] Choices {get;set;}
  }
}
```

4.	Open the [**CreateTopic**](https://github.com/microsoft/Low-Code/blob/main/resources/workshops/Dev%20in%20a%20day/lab04/CreateTopic.cs) file.

5.	Locate the **Run** method attributes and replace them with the attributes below. This provides user friendly names when we create a connector to use the API.

```js
[FunctionName("CreateTopic")]
[OpenApiOperation(operationId: "CreateTopic", tags: new[] { "name" }, Summary = "Create Topic", Description = "Create Topic", Visibility = OpenApiVisibilityType.Important)]
[OpenApiSecurity("function_key", SecuritySchemeType.ApiKey, Name = "code", In = OpenApiSecurityLocationType.Query)]
[OpenApiResponseWithBody(statusCode: HttpStatusCode.OK, contentType: "application/json", bodyType: typeof(Guid), Description = "The Guid response")]
[OpenApiRequestBody(contentType: "application/json", bodyType: typeof(TopicModel))]
```

![Lab-04 Image](./img/lab04%20(11).jpg)

6.	Remove **get** from the Run method. You should only have **post**.

![Lab-04 Image](./img/lab04%20(12).jpg)


## 1.2 Add Power Platform Dataverse and Azure ID package

1.	Go to the **Terminal** and add **Power Platform Dataverse Client** package.
```
dotnet add package Microsoft.PowerPlatform.Dataverse.Client
```

![Lab-04 Image](./img/lab04%20(13).jpg)

2.	Wait for the package to be added.
3.	Add **Azure Identity** package.
```
dotnet add package Azure.Identity
```

4.	Wait for the package to be added.
5.	Open the [**CreateTopic**](https://github.com/microsoft/Low-Code/blob/main/resources/workshops/Dev%20in%20a%20day/lab04/CreateTopic.cs) file and add the using statements below.

```cs
using System;
using Microsoft.Identity.Client;
using Azure.Core;
using Azure.Identity;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Azure.WebJobs.Extensions.OpenApi.Core.Enums;
using Microsoft.Xrm.Sdk; 
```

6.	Add the below method after the **run** method. 

:::info Guidance
This method will use the token passed from the calling app to get a new token that will allow the function to use the Dataverse API on behalf of the calling user.
:::

```cs
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
```


7.	Replace the code inside the **Run** method with code below. 

:::info Guidance
This will get an instance of the Dataverse API and use the `GetAccessToken` function we just defined.
:::

```cs
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
```

8.	Add the following code after the **if** statement of the **Run** method to reserialize the request. 

:::info Guidance 
This will get us the data passed from the caller.
:::

```cs
string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
var data = JsonConvert.DeserializeObject<TopicModel>(requestBody);
```

9.	Add the code below that will create the row to the **Run** method. 

:::info guidance
This code creates the rows in Dataverse and is where we might add more logic in the future.
:::

```cs
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
```

10.	Return the topic id as `JSON` (required by Power Apps). Add the code below to the **Run** method.

```cs
return new OkObjectResult(topicId);
```

## 1.3 Save and Run the Function

1.	Click **File** and **Save** all your changes 
👉 Click **Terminal** and select **Run Build Task**

:::tip note
The run should succeed. Press any key to stop.
:::