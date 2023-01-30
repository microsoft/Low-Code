---
sidebar_position: 1
title: 5. Create Custom Connector
---

:::info LAB SCENARIO

Working as part of the PrioritZ fusion team you will be configuring a custom connector for a new API you build using Azure Functions. The team has decided to move the logic when a user creates a new “ask” to the Azure Function API. This will keep the Power App formula simple and allow more complex logic to be added in the future. In this lab you will create the function, use the Dataverse API, secure the API with Azure AD, configure a custom connector to use the API, and change the Power App to use the connector.

Note: This lab requires an Azure subscription (or trial) in the **same tenant** as your Dataverse environment.



In **Exercise 5** you will create a new custom connector.
:::

## 5.1 Create connector

1.	Navigate to https://portal.azure.com/ 
2.	Select All resources, search for the function app you deployed and click to open it.
3.	Copy the URL.
4.	Open a new browser tab or window and paste the URL you copied.
5.	Add `/api/swagger.json` to the end of the URL and `ENTER`


6.	Click Accept if prompted for permissions.
7.	Right click on the swagger and select Save as.


8.	Save the file on your local machine.
9.	Navigate to Power Apps maker portal and make sure you have the correct Dev environment selected.
10.	Expand Dataverse and select Custom Connectors.

11.	Click on the chevron button next to the New custom connector and select Import an OpenAPI file.

12.	Enter PrioritZ Connector for name and click Import.

13.	Select the swagger file you saved and click Open.
14.	Click Continue.
15.	Provide Description and advance to Security.


16.	Select OAuth 2.0 for Authentication type.
17.	Select Azure Active Directory Identity provider.
18.	Copy the PrioritZFL Connector application ID from your notepad and paste it in the Client id field.
19.	Copy the PrioritZFL Connector Secret your notepad and paste it in the Client secret field.
20.	Copy the Tenant ID from your notepad and replace common with it in the Tenant ID field.
21.	Copy the PrioritZ API application ID from your notepad and paste it in the Resource URL field.
22.	Enter true for Enable on-behalf-of login.
23.	Click Create connector.

## 5.2 Test connector

1.	Select the Test tab.
2.	Click + New connection.

3.	Click Create.
4.	Provide your credentials.
5.	Click Accept.
6.	Select Custom connectors and click Edit on the PrioritZ connector.


7.	Select the Test tab.
8.	Make sure the connection you created is selected.
9.	Turn on Raw Body.
10.	Provide the JSON below and click Test operation.
```cs
{
  "topic": "Test Topic",
  "details": "From Azure Function",
  "respondBy": "2022-11-01",
  "myNotes": "It worked",
  "choices": [
    {
      "choice": "Choice 1"
    }
  ]
}
```

11.	The operation test should succeed, and the response should look like the image below.