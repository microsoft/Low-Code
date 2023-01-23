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
 * [Exercise &ndash; Try it yourself!](#exercise-–-try-it-yourself)
 * [Resources &ndash; For self-study!](#resources-–-for-self-study)

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

1. Let's take a look at the [API policy configurations][az apim policies] on APIM.

    ![API Key Auth - API policy][image-02]

   Through this policy, the function app's API key is integrated. Therefore, you don't need to worry about the function app's API key.

1. Now, you want to add the APIM's API key. Make sure your API settings has enabled the subscription. Also make sure that there is no user authorisation enabled by selecting "None" against the "User authorization" option.

    ![API Key Auth - enable subscription][image-03]

1. Export the OpenAPI document by selecting the "Export" menu and choosing the "OpenAPI v2 (JSON)" option. Then you will be able to download an OpenAPI document.

    ![API Key Auth - export OpenAPI document][image-04]

1. Let's take a look at the document. It might look like the following JSON document, saying that you MUST use the API key through `Ocp-Apim-Subscription-Key` in the request header or `subscription-key` in the request querystring.

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

1. Alright. Let's import this OpenAPI document for a custom connector. Go to either `https://make.powerapps.com` for Power Apps or `https://make.powerautomate.com` for Power Automate, and create a custom connector by importing an OpenAPI file.

    ![API Key Auth - custom connector by OpenAPI file][image-05]

1. It automatically identifies the authentication type to "API Key", API key parameter name of `Ocp-Apim-Subscription-Key` and the parameter location of "Header".

    ![API Key Auth - custom connector authentication type][image-06]

1. After creating the connector, let's create a connection for the connector. Then, it requires the API key. Enter the API key generated from the APIM.

    ![API Key Auth - custom connector connection][image-07]

1. Test the connector whether it works OK or not.

    ![API Key Auth - custom connector test][image-08]

We've added an extra security to the custom connector with APIM's API key.


## 2. Basic Auth

The second option is to use the basic auth flow. It's important to know that **APIM doesn't support this basic auth flow out-of-the-box**. Although it's the limitation, you can still apply this flow for the Power Platform custom connectors, by slightly modifying the OpenAPI document.

1. Let's take a look at the API policy, which is basically the same as the one in the previous section &ndash; integrate the function app's API key with APIM.

    ![Basic Auth - API policy][image-09]

1. Make sure that you're not going to use the subscription key for this time. Therefore, disable the subscription key. By doing so, you don't need the API key any longer for this API.

    ![Basic Auth - disable subscription][image-10]

    It's also worth noting that, because the custom connector sends the basic auth token to the function app through APIM, it's safe to assume that the function app is able to understand the token and process it.

1. Once you're ready, export the OpenAPI document by selecting the "Export" menu and choosing the "OpenAPI v2 (JSON)" option.

    ![Basic Auth - export OpenAPI document][image-11]

1. Then you will be able to download an OpenAPI document. Let's take a look at the document. It might look like the following JSON document, saying that you MUST use either `Ocp-Apim-Subscription-Key` in the request header or `subscription-key` in the request querystring.

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

1. Once you update the OpenAPI document, let's import this OpenAPI document for a custom connector. Go to either `https://make.powerapps.com` for Power Apps or `https://make.powerautomate.com` for Power Automate, and create a custom connector by importing an OpenAPI file.

    ![Basic Auth - custom connector by OpenAPI file][image-12]

1. It automatically identifies the authentication type to "Basic authentication", "username" and "password".

    ![Basic Auth - custom connector authentication type][image-13]

1. After creating the connector, let's create a connection for the connector. Then, it requires the username and password. In this sample app, the username and password are for [Atlassian Jira][atlassian jira]. Therefore, get your email address as the username and API token as the password from there.

    ![Basic Auth - custom connector connection][image-14]

1. Test the connector whether it works OK or not.

    ![Basic Auth - custom connector test][image-15]

We've added an extra security to the custom connector with basic auth.


## 3. OAuth2 &ndash; Authorisation Code Auth

The third option is to use [OAuth2][oauth2]. There are many authentication flows in OAuth2, but Power Platform custom connector only supports the [Authorisation code auth flow][az ad authn authcodeauth] at this time of writing. Therefore, let's focus on that. The basic idea of using any OAuth2 auth flow is to get the access token to get the resources that you want. So, it's safe to assume that the function app is able to understand the access token and process it.

1. To use OAuth2 auth flow, you need to [register an app][az ad register app] on [Azure Active Directory][az ad]. After registering a new app, it will give ability to get the access codes. I'm not going into too many details here, but it's worth taking a look at [this document][gh sample authcodeauth readme]. Once you create the app, you will have the following information:

    * Tenant ID
    * Client ID
    * Client secret
    * Endpoint URL for authorization
    * Endpoint URL for access token
    * Endpoint URL for refresh token

1. With this information, you need to integrate it with APIM. Go to Azure Portal, open the APIM instance, and naviagte to the "OAuth 2.0 + OpenID Connect" blade. Add a new OAuth2 service under the "OAuth 2.0" tab.

    ![Auth Code Auth - new OAuth2 service][image-16]

1. Enter the following detains in the fields and create the service.

    * Display name: `AuthCode Auth`
    * Client registration page URL: `http://localhost`
    * Authorization grant types: tick only on "Authorization code"
    * Authorization endpoint URL: endpoint URL for authorization noted from the above
    * Token endpoint URL: endpoint URL for access token noted from the above
    * Default scope: `https://graph.microsoft.com/.default`
    * Client ID: client ID noted from the above
    * Client secret: client secret noted from the above

    After that you will have both redirect URLs:

    * `null/signin-oauth/code/callback/authcode-auth`
    * `null/signin-oauth/implicit/callback`

    Replace `null` with your APIM instance URL like `https://{{APIM_NAME}}.azure-api.net`, where `{{APIM_NAME}}` is your APIM instance name.

1. Add both redirect URLs to your registered app on Azure AD as redirect URLs.

1. Check out the API policy, which is basically the same as the ones in the previous sections &ndash; integrate the function app's API key with APIM.

    ![Auth Code Auth - API policy][image-17]

1. Make sure that you're not going to use the subscription key for this time. Therefore, disable the subscription key. By doing so, you don't need the API key any longer for this API. In addition to this, because you're using OAuth2 authorization, choose the "OAuth 2.0" option and select the OAuth 2.0 server of "AuthCode Auth" that you just created right before.

    ![Auth Code Auth - disable subscription][image-18]

    It's also worth noting that, because the custom connector sends the OAuth2 access token to the function app through APIM, it's safe to assume that the function app is able to understand the token and process it.

1. Once you're ready, export the OpenAPI document by selecting the "Export" menu and choosing the "OpenAPI v2 (JSON)" option.

    ![Auth Code Auth - export OpenAPI document][image-19]

1. Then you will be able to download an OpenAPI document. Let's take a look at the document. It might look like the following JSON document, saying that you MUST use either `Ocp-Apim-Subscription-Key` in the request header or `subscription-key` in the request querystring.

   However, you MUST remove both because you are not going to use the API key auth this time. Make sure that you MUST replace `{{TENANT_ID}}` with your tenant ID.

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
    
        // ⬇️⬇️⬇️ Keep 'oauth2AuthCode Auth' ⬇️⬇️⬇️
        "oauth2AuthCode Auth": {
          "type": "oauth2",
          "scopes": {
            "https://graph.microsoft.com/.default": ""
          },
          "flow": "accessCode",
          "authorizationUrl": "https://login.microsoftonline.com/{{TENANT_ID}}/oauth2/v2.0/authorize",
          "tokenUrl": "https://login.microsoftonline.com/{{TENANT_ID}}/oauth2/v2.0/token"
        }
        // ⬆️⬆️⬆️ Keep 'oauth2AuthCode Auth' ⬆️⬆️⬆️
      },
      "security": [
        // ⬇️⬇️⬇️ Remove both 'apiKeyHeader' and 'apiKeyQuery' ⬇️⬇️⬇️
        {
          "apiKeyHeader": [],
          "oauth2AuthCode Auth": [
            "https://graph.microsoft.com/.default"
          ]
        },
        {
          "apiKeyQuery": [],
          "oauth2AuthCode Auth": [
            "https://graph.microsoft.com/.default"
          ]
        }
        // ⬆️⬆️⬆️ Remove both 'apiKeyHeader' and 'apiKeyQuery' ⬆️⬆️⬆️
    
        // ⬇️⬇️⬇️ Add 'oauth2AuthCode Auth' ⬇️⬇️⬇️
        {
          "oauth2AuthCode Auth": [
            "https://graph.microsoft.com/.default"
          ]
        }
        // ⬆️⬆️⬆️ Add 'oauth2AuthCode Auth' ⬆️⬆️⬆️
      ],
      "paths": {
        ...
      }
      ...
    }
    ```

1. Once you update the OpenAPI document, let's import this OpenAPI document for a custom connector. Go to either `https://make.powerapps.com` for Power Apps or `https://make.powerautomate.com` for Power Automate, and create a custom connector by importing an OpenAPI file.

    ![Auth Code Auth - custom connector by OpenAPI file][image-20]

1. It automatically identifies the authentication type to "OAuth 2.0" and Identity Provider of "Generic OAuth 2". Enter Client ID, Client secret and Refresh URL noted from above. It's OK to use a different registered app here, as long as it's under the same tenant.

    ![Auth Code Auth - custom connector authentication type][image-21]

1. After creating the connector, let's create a connection for the connector. As you've already provided the client ID and secret, the connection will be created straightaway.

1. Test the connector whether it works OK or not.

    ![Auth Code Auth - custom connector test][image-22]

We've added an extra security to the custom connector with OAuth2 - authorisation code auth.


## 4. BFF (Backends-for-Frontends) &ndash; Combination of API Key Auth and Basic Auth

There are many requirements using the [BFF (Backends-for-frontends) pattern][az patterns architecture bff] through APIM, especially if your organisation adopts microservice architecture. It's not uncommon that APIs use different authentication approaches from each API &ndash; one use the API key auth, another one uses the basic key auth and the other one uses the OAuth2 auth.

If you are about to build a BFF with those APIs using different authentication methods, what would you do? If you're even about to create the BFF for the Power Platform custom connector, what could you do? There are many different combinations of authentication methods, but let's focus on those two &ndash; API key auth and basic auth.

1. First of all, you MUST choose which authentication type will use for the main one for the Power Platform custom connector. If you want to use the basic auth as the main one, the custom connector doesn't have to know the API key, and vice versa. In other words, the other authentication method MUST be handled by the APIM policy of the BFF API.

1. Let's take a look at [this OpenAPI document][gh sample openapi bff] for BFF. It's the combination of both apps using the API key auth and basic auth respectively.

    ```yaml
    openapi: 3.0.1
    ...
    paths:
      /greeting:
        get:
          tags:
            - greeting
          summary: Greeting
          operationId: Greeting
          ...
          security:
            - apiKeyHeader: [ ]
            - apiKeyQuery: [ ]
      /profile:
        get:
          tags:
            - profile
          summary: Profile
          operationId: Profile
          ...
          security:
            - apiKeyHeader: [ ]
            - apiKeyQuery: [ ]
            - basicAuth: [ ]
    ...
    components:
      ...
      securitySchemes:
        apiKeyHeader:
          type: apiKey
          name: Ocp-Apim-Subscription-Key
          in: header
        apiKeyQuery:
          type: apiKey
          name: subscription-key
          in: query
        basicAuth:
          type: http
          scheme: basic
    ```

   It defines both API key auth and basic auth in the document and apply them to each endpoint.

1. Import this OpenAPI to APIM. Then check out the settings. Make sure the subscription MUST be activated.

    ![BFF - enable subscription][image-23]

1. Add the [`authentication-basic` as an inbound policy][az apim policies basicauth] that sets the basic auth token to the request header. After this, APIM automatically injects this basic auth token to every request header.

    ![BFF - basic authentication policy][image-24]

1. Export the OpenAPI document. As you're going to use the API key auth, follow the [1. API Key Auth](#1-api-key-auth) pattern.

1. In the Power Platform custom connector, you only need the API key provided by APIM to create the connection because the basic auth token has already been encapsulated by APIM.

1. Test the connector whether it works OK or not. As you can see, both endpoints works perfectly fine.

    ![BFF - custom connector test][image-25]

We've created a BFF by combining APIs that use API key auth and basic auth, and used it for Power Platform custom connector. As we mentioned earlier in this post, due to the restriction of authentication types in Power Platform custom connector, we have to choose only one authentication type. If you need more than one authentication type for your connector, you MUST choose one and all the others MUST be encapsulated by APIM.

Theoretically, there are three possible combinations for BFF:

* API key auth and basic auth
* API key auth and OAuth2 auth code auth
* Basic auth and OAuth2 auth code auth

Throughout this post, we've walked through the first combination. You can try the other two combinations on your end!


## Exercise &ndash; Try it yourself!

* Fork this [GitHub repository][gh sample] to provision and deploy the sample apps.
* Read and follow the instructions for each scenario:
  * [API Key Auth][gh sample apikeyauth readme]
  * [Basic Auth][gh sample basicauth readme]
  * [Authorisation Code Auth][gh sample authcodeauth readme]
  * [BFF][gh sample bff readme]


## Resources &ndash; For self-study!

* [Cloud architecture pattern &ndash; BFF (Backends-for-frontends)][az patterns architecture bff]
* [Azure AD application model][az ad register app]
* [Azure APIM authentication and authorisation][az apim security authn]
* [Power Platform custom connector parameters][az pp cuscon authn]


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
[image-20]: ./01-image-20.png
[image-21]: ./01-image-21.png
[image-22]: ./01-image-22.png
[image-23]: ./01-image-23.png
[image-24]: ./01-image-24.png


[gh sample]: https://github.com/devkimchi/power-platform-connector-via-apim
[gh sample apikeyauth readme]: https://github.com/devkimchi/power-platform-connector-via-apim/blob/main/src/ApiKeyAuthApp/README.md
[gh sample basicauth readme]: https://github.com/devkimchi/power-platform-connector-via-apim/blob/main/src/BasicAuthApp/README.md
[gh sample authcodeauth readme]: https://github.com/devkimchi/power-platform-connector-via-apim/blob/main/src/AuthCodeAuthApp/README.md
[gh sample bff readme]: https://github.com/devkimchi/power-platform-connector-via-apim/blob/main/src/BffApp/README.md
[gh sample openapi bff]: https://github.com/devkimchi/power-platform-connector-via-apim/blob/main/infra/apim-openapi-bff.yaml

[az patterns architecture bff]: https://learn.microsoft.com/azure/architecture/patterns/backends-for-frontends?WT.mc_id=dotnet-82522-juyoo

[az ad]: https://learn.microsoft.com/azure/active-directory/fundamentals/active-directory-whatis?WT.mc_id=dotnet-82522-juyoo
[az ad authn authcodeauth]: https://learn.microsoft.com/azure/active-directory/develop/v2-oauth2-auth-code-flow?WT.mc_id=dotnet-82522-juyoo
[az ad register app]: https://learn.microsoft.com/azure/active-directory/develop/quickstart-register-app?WT.mc_id=dotnet-82522-juyoo

[az apim]: https://learn.microsoft.com/azure/api-management/api-management-key-concepts?WT.mc_id=dotnet-82522-juyoo
[az apim policies]: https://learn.microsoft.com/azure/api-management/api-management-howto-policies?WT.mc_id=dotnet-82522-juyoo
[az apim policies setheader]: https://learn.microsoft.com/azure/api-management/set-header-policy?WT.mc_id=dotnet-82522-juyoo
[az apim policies basicauth]: https://learn.microsoft.com/azure/api-management/authentication-basic-policy?WT.mc_id=dotnet-82522-juyoo
[az apim subscription]: https://learn.microsoft.com/azure/api-management/api-management-subscriptions?WT.mc_id=dotnet-82522-juyoo
[az apim security authn]: https://learn.microsoft.com/azure/api-management/authentication-authorization-overview?WT.mc_id=dotnet-82522-juyoo

[az fncapp]: https://learn.microsoft.com/azure/azure-functions/functions-overview?WT.mc_id=dotnet-82522-juyoo

[az pp cuscon authn]: https://learn.microsoft.com/connectors/custom-connectors/connection-parameters?WT.mc_id=dotnet-82522-juyoo

[atlassian jira]: https://www.atlassian.com/software/jira
[oauth2]: https://oauth.net/2/
