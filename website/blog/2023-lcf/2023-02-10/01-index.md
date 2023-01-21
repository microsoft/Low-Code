---
slug: 2023-day10
title: 10. Providing Power Platform custom connector with additional security via Azure API Management
authors: [justin]
draft: true
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 3
keywords: [power-platform, custom-connector, api-management, apim, security, authn, authentication, authorization]
image: ../../static/img/banner.png
description: "Throughout this post, let's discuss how Azure API Management can offer extra security to Power Platform custom connectors" 
tags: [low-code-february, 28-days-of-lowcode, learn-live, zero-to-hero, ask-the-expert, fusion-teams, power-platform]
---

<head>
  <meta name="twitter:url" content="https://microsoft.github.io/Low-Code/blog/2023-day10" />
  <meta name="twitter:title" content="Providing Power Platform custom connector with additional security via Azure API Management" />
  <meta name="twitter:description" content="Throughout this post, let's discuss how Azure API Management can offer extra security to Power Platform custom connectors" />
  <meta name="twitter:image" content="FIXME: Post Image" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:creator" content="@justinchronicle" />
  <meta name="twitter:site" content="@AzureAdvocates" /> 
  <link rel="canonical" href="https://microsoft.github.io/Low-Code/blog/2023-day10" />
</head>

Welcome to `Day 10` of #28DaysOfLowCode!

The theme for this week is **backend**. Yesterday we talked about building custom connectors. Today we'll explore the topic of giving extra security to those custom connectors through [Azure API Management (APIM)][az apim].

## What We'll Cover

 * [Power Platform Custom Connector Authentication Types](#power-platform-custom-connector-authentication-types)
 * [Deploying Sample Apps](#deploying-sample-apps)
 * [API Key Auth](#1-api-key-auth)
 * [Basic Auth](#2-basic-auth)
 * [OAuth2 &ndash; Authorisation Code Auth](#3-oauth2--authorisation-code-auth)
 * [BFF (Backend-for-Frontend) &ndash; Combination of API Key Auth and Basic Auth](#4-bff-backend-for-frontend--combination-of-api-key-auth-and-basic-auth)
 * Exercise: Try this yourself!
 * Resources: For self-study!

<!-- FIXME: banner image -->
![Empty Banner Placeholder](../../../static/img/banner.png)


<!-- ************************************* -->
<!--  AUTHORS: ONLY UPDATE BELOW THIS LINE -->
<!-- ************************************* -->

## Power Platform Custom Connector Authentication Types

Power Platform custom connectors currently support [four authentication flow options &ndash; No Auth flow, API Key Auth flow, Basic Auth flow and OAuth2 Authorisation Code Auth flow][az pp cuscon authn]. "No Auth flow" is definately not an option for this time, but let's focus on the other three options throughout this post. You also need to be aware that those authentication types are mutually exclusive from each other. In other words, you CANNOT combine two or more authentication scenarios on one custom connector. Also, if you want to use the API Key auth flow, you CANNOT use the other two authentication types either within the custom connector. I'll discuss that later in this post.


## Deploying Sample Apps

Let's deploy the sample apps for this post. Fork [this repository][gh sample] and follow the detailed instruction written on its README to provision and deploy the sample apps. Once everything is done, you will have one [APIM][az apim] instance and three [Azure Functions][az fncapp] app instances representing authentication scenarios like API Key Auth, Basic Auth and OAuth2 Auth respectively.

![Azure resources provisioned][image-01]

Each function app has already been integrated with APIM. Let's take a look at each authentication type.


## 1. API Key Auth

The first option is to use an API key to give extra security. APIM offers a concept called [subscription][az apim subscription] that comes with either HTTP request header of `Ocp-Apim-Subscription-Key` or HTTP request querystring of `subscription-key`. Therefore, you can add another security layer of API key with APIM, in addition to your Azure Function app's `x-functions-key` in the request header or `code` in the request querystring.

Let's take a look at the [API policy configurations][az apim policies] on APIM.

![API Key Auth - API policy][image-02]

Through this policy, the function app's API key is integrated. Therefore, you don't need to worry about the function app's API key. Now, you want to add the APIM's API key. Make sure your API settings has enabled the subscription. Also make sure that there is no user authorisation enabled by selecting "None" against the "User authorization" option.

![API Key Auth - enable subscription][image-03]

Export the OpenAPI document by selecting the "Export" menu and choosing the "OpenAPI v2 (JSON)" option. Then you will be able to download an OpenAPI document.

![API Key Auth - export OpenAPI document][image-04]

Let's take a look at the document. It might look like the following JSON document, saying that you MUST use the API key through `Ocp-Apim-Subscription-Key` in the request header or `subscription-key` in the request querystring.

```jsonc
{
  "swagger": "2.0",
  ...
  "securityDefinitions": {
    "apiKeyHeader": {
      "type": "apiKey",
      "name": "Ocp-Apim-Subscription-Key",
      "in": "header"
    },
    "apiKeyQuery": {
      "type": "apiKey",
      "name": "subscription-key",
      "in": "query"
    }
  },
  "security": [
    {
      "apiKeyHeader": []
    },
    {
      "apiKeyQuery": []
    }
  ],
  "paths": {
    ...
  }
  ...
}
```

Alright. Let's import this OpenAPI document for a custom connector. Go to either `https://make.powerapps.com` for Power Apps or `https://make.powerautomate.com` for Power Automate, and create a custom connector by importing an OpenAPI file.

![API Key Auth - custom connector by OpenAPI file][image-05]

It automatically identifies the authentication type to "API Key", API key parameter name of `Ocp-Apim-Subscription-Key` and the parameter location of "Header".

![API Key Auth - custom connector authentication type][image-06]

After creating the connector, let's create a connection for the connector. Then, it requires the API key. Enter the API key generated from the APIM.

![API Key Auth - custom connector connection][image-07]

Test the connector whether it works OK or not.

![API Key Auth - custom connector test][image-08]

We've added an extra security to the custom connector with APIM's API key.


## 2. Basic Auth

The second option is to use the basic auth flow. It's important to know that **APIM doesn't support this basic auth flow out-of-the-box**. Although it's the limitation, you can still apply this flow for the Power Platform custom connectors, by slightly modifying the OpenAPI document.

Let's take a look at the API policy, which is basically the same as the one in the previous section &ndash; integrate the function app's API key with APIM.

![Basic Auth - API policy][image-09]

Make sure that you're not going to use the subscription key for this time. Therefore, disable the subscription key. By doing so, you don't need the API key any longer for this API.

![Basic Auth - disable subscription][image-10]

It's also worth noting that, because the custom connector sends the basic auth token to the function app through APIM, it's safe to assume that the function app is able to understand the token and process it.

Once you're ready, export the OpenAPI document by selecting the "Export" menu and choosing the "OpenAPI v2 (JSON)" option.

![Basic Auth - export OpenAPI document][image-11]

Then you will be able to download an OpenAPI document. Let's take a look at the document. It might look like the following JSON document, saying that you MUST use either `Ocp-Apim-Subscription-Key` in the request header or `subscription-key` in the request querystring.

However, you MUST replace both with the basic auth because you are not going to use the API key auth this time.

```jsonc
{
  "swagger": "2.0",
  ...
  "securityDefinitions": {
    // ⬇️⬇️⬇️ Remove both 'apiKeyHeader' and 'apiKeyQuery' ⬇️⬇️⬇️
    "apiKeyHeader": {
      "type": "apiKey",
      "name": "Ocp-Apim-Subscription-Key",
      "in": "header"
    },
    "apiKeyQuery": {
      "type": "apiKey",
      "name": "subscription-key",
      "in": "query"
    },
    // ⬆️⬆️⬆️ Remove both 'apiKeyHeader' and 'apiKeyQuery' ⬆️⬆️⬆️

    // ⬇️⬇️⬇️ Add 'basicAuth' ⬇️⬇️⬇️
    "basicAuth": {
      "type": "basic"
    }
    // ⬆️⬆️⬆️ Add 'basicAuth' ⬆️⬆️⬆️
  },
  "security": [
    // ⬇️⬇️⬇️ Remove both 'apiKeyHeader' and 'apiKeyQuery' ⬇️⬇️⬇️
    {
      "apiKeyHeader": []
    },
    {
      "apiKeyQuery": []
    },
    // ⬆️⬆️⬆️ Remove both 'apiKeyHeader' and 'apiKeyQuery' ⬆️⬆️⬆️

    // ⬇️⬇️⬇️ Add 'basicAuth' ⬇️⬇️⬇️
    {
      "basicAuth": []
    }
    // ⬆️⬆️⬆️ Add 'basicAuth' ⬆️⬆️⬆️
  ],
  "paths": {
    ...
  }
  ...
}
```

Once you update the OpenAPI document, let's import this OpenAPI document for a custom connector. Go to either `https://make.powerapps.com` for Power Apps or `https://make.powerautomate.com` for Power Automate, and create a custom connector by importing an OpenAPI file.

![Basic Auth - custom connector by OpenAPI file][image-12]

It automatically identifies the authentication type to "Basic authentication", "username" and "password".

![Basic Auth - custom connector authentication type][image-13]

After creating the connector, let's create a connection for the connector. Then, it requires the username and password. In this sample app, the username and password are for [Atlassian Jira][atlassian jira]. Therefore, get your email address as the username and API token as the password from there.

![Basic Auth - custom connector connection][image-14]

Test the connector whether it works OK or not.

![Basic Auth - custom connector test][image-15]

We've added an extra security to the custom connector with basic auth.


## 3. OAuth2 &ndash; Authorisation Code Auth

TBD


## 4. BFF (Backend-for-Frontend) &ndash; Combination of API Key Auth and Basic Auth

TBD


## Exercise

TBD


## Resources

TBD


[image-01]: ./01-image-01.png
[image-02]: ./01-image-02.png
[image-03]: ./01-image-03.png
[image-04]: ./01-image-04.png
[image-05]: ./01-image-05.png
[image-06]: ./01-image-06.png
[image-07]: ./01-image-07.png
[image-08]: ./01-image-08.png
[image-09]: ./01-image-09.png
[image-10]: ./01-image-10.png
[image-11]: ./01-image-11.png
[image-12]: ./01-image-12.png
[image-13]: ./01-image-13.png
[image-14]: ./01-image-14.png
[image-15]: ./01-image-15.png
[image-16]: ./01-image-16.png
[image-17]: ./01-image-17.png
[image-18]: ./01-image-18.png
[image-19]: ./01-image-19.png


[gh sample]: https://github.com/devkimchi/power-platform-connector-via-apim

[az apim]: https://learn.microsoft.com/azure/api-management/api-management-key-concepts?WT.mc_id=dotnet-82522-juyoo
[az apim policies]: https://learn.microsoft.com/azure/api-management/api-management-howto-policies?WT.mc_id=dotnet-82522-juyoo
[az apim subscription]: https://learn.microsoft.com/azure/api-management/api-management-subscriptions?WT.mc_id=dotnet-82522-juyoo

[az fncapp]: https://learn.microsoft.com/azure/azure-functions/functions-overview?WT.mc_id=dotnet-82522-juyoo

[az pp cuscon authn]: https://learn.microsoft.com/connectors/custom-connectors/connection-parameters?WT.mc_id=dotnet-82522-juyoo

[atlassian jira]: https://www.atlassian.com/software/jira
