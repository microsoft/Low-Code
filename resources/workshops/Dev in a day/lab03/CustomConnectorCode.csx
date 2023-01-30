public class Script : ScriptBase
{
    public override async Task<HttpResponseMessage> ExecuteAsync()
    {
        // Check if the operation ID matches what is specified in the OpenAPI definition of the connector
        if (this.Context.OperationId == "getcurrentbadge")
        {
            this.Context.Request.RequestUri = ReplaceUri(this.Context.Request.RequestUri, "getcurrentbadge", "getrecipient");

            return await this.HandleGetCurrentBadgeOperation().ConfigureAwait(false);
        }
        else
        {
            //pass-thru any other operation to the API directly
            return await this.HandleForwardOperation().ConfigureAwait(false);
        }
    }
    private Uri ReplaceUri(Uri original, string fromValue, string toValue)
    {
        try
        {
            var builder = new UriBuilder(original.ToString().Replace(fromValue, toValue));
            return builder.Uri;
        }
        catch (Exception ex)
        {
            throw new Exception(original.ToString().Replace(fromValue, toValue));
        }
    }
    private async Task<HttpResponseMessage> HandleGetCurrentBadgeOperation()
    {
        JObject newResult = null;

        // Use the context to send an HTTP request
        HttpResponseMessage response = await this.Context.SendAsync(this.Context.Request, this.CancellationToken).ConfigureAwait(continueOnCapturedContext: false);
        var nobadgeImageUriBuilder = new UriBuilder(this.Context.Request.RequestUri);
        nobadgeImageUriBuilder.Query = String.Empty;
        nobadgeImageUriBuilder.Path = "Badges/NoBadges.jpg";

        // Do the transformation if the response was successful, otherwise return error responses as-is
        if (response.IsSuccessStatusCode)
        {
            if (response.StatusCode == HttpStatusCode.OK)
            {
                var responseString = await response.Content.ReadAsStringAsync().ConfigureAwait(continueOnCapturedContext: false);

                var result = JObject.Parse(responseString);

                // Wrap the original JSON object into a new JSON object with just two properties

                if (result != null && result.ContainsKey("currentBadge") && result["currentBadge"].HasValues)
                {
                    newResult = new JObject
                    {
                        ["name"] = result["currentBadge"]["badge"]["name"],
                        ["image"] = result["currentBadge"]["badge"]["thumbnailUrl"],
                    };
                }
                else
                {
                    newResult = new JObject
                    {
                        ["name"] = "No Badges",
                        ["image"] = nobadgeImageUriBuilder.ToString(),
                    };
                }
            }
            else
            {
                newResult = new JObject
                {
                    ["name"] = "No Badges",
                    ["image"] = nobadgeImageUriBuilder.ToString(),
                };
            }
            response.Content = CreateJsonContent(newResult.ToString());
            response.StatusCode = HttpStatusCode.OK;
        }

        return response;
    }

    private async Task<HttpResponseMessage> HandleForwardOperation()
    {
        // Use the context to forward/send an HTTP request
        HttpResponseMessage response = await this.Context.SendAsync(this.Context.Request, this.CancellationToken).ConfigureAwait(continueOnCapturedContext: false);
        return response;
    }
}