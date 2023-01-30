---
sidebar_position: 1
title: 4. Register App
---

:::info LAB SCENARIO

Working as part of the PrioritZ fusion team you will be configuring a custom connector for a new API you build using Azure Functions. The team has decided to move the logic when a user creates a new “ask” to the Azure Function API. This will keep the Power App formula simple and allow more complex logic to be added in the future. In this lab you will create the function, use the Dataverse API, secure the API with Azure AD, configure a custom connector to use the API, and change the Power App to use the connector.

Note: This lab requires an Azure subscription (or trial) in the **same tenant** as your Dataverse environment.

In **Exercise 4** you will deploy the function to Azure.

:::

## 4.1 Register Connector Client app

1.	Click on the Portal menu and select Azure Active Directory.
2.	Select App registrations and click + New registration. This application registration will be used for the connector to access the protected API.
3.	Enter `PrioritZConnector <Initials>` for Name, select Accounts in this organizational directory only, select Web for Redirect URI, enter `https://global.consent.azure-apim.net/redirect` and click Register.

4.	Copy the Application (client) ID and keep it in a notepad as PrioritZFL Connector application ID.

5.	Select Certificates & secrets and click + New client secret.
6.	Provide a description, select 3 months, and click Add. 
7.	Copy the secret Value and keep it on a notepad as PrioritZFL Connector Secret.
8.	Select API permissions and click + Add a permission.

9.	Select the My APIs tab and select PrioritZFL.

10.	Check the user_impersonation checkbox and click Add permission.