---
sidebar_position: 1
title: 3. Publish to Azure
---

:::info LAB SCENARIO

Working as part of the PrioritZ fusion team you will be configuring a custom connector for a new API you build using Azure Functions. The team has decided to move the logic when a user creates a new “ask” to the Azure Function API. This will keep the Power App formula simple and allow more complex logic to be added in the future. In this lab you will create the function, use the Dataverse API, secure the API with Azure AD, configure a custom connector to use the API, and change the Power App to use the connector.

Note: This lab requires an Azure subscription (or trial) in the **same tenant** as your Dataverse environment.



In **Exercise 3** you will deploy the function to Azure.

:::

## 3.1 Publish to Azure
1.	Press [CONTROL + SHIFT + P] to open the command palette.
2.	Type create function and select Create Function App in Azure.
3.	Select + Create Function App.
4.	Enter PrioritZFuncFL for function app name an [ENTER]. Replace FL with your initials.
5.	Select .NET 6.
6.	Select your location.
7.	Wait for the function app to be created.
8.	Click Deploy and select Deploy to Function App.


9.	Select the function you created.

10.	Click Deploy and wait for the deployment to complete.

11.	Navigate to https://portal.azure.com/ 
12.	Select All resources, search for the function app you deployed and click to open it.

13.	Select Authentication and click Add identity provider.

14.	Select Microsoft for Identity provider, 
15.	Select Current tenant - Single tenant and click Add.


16.	Go to the Portal menu page of Azure portal.
17.	Select Azure Active Directory.


18.	Select App registrations.
19.	Click to open the `PrioritFuncZFL`.

20.	Copy the Application (client) ID of the PrioritZFuncFL application registration and keep it on a notepad as PrioritZFL API application ID. You will need this id in future steps.  This ID will be used to configure protection of the API.

21.	Copy the Directory (tenant) ID and keep it on a notepad as Tenant ID. You will need this id in future steps.

22.	Select Certificates & secrets.
23.	Click New + client secret.


24.	Provide a description, select 3 months, and click Add.

25.	Copy the Value and keep it in a notepad as PrioritZFL API Secret. You need this value in future steps.

26.	Select API permissions.
27.	Click + Add a permission.


28.	Select Dynamics CRM. Dynamics CRM is Dataverse, the Azure portal just hasn’t been updated as of the time of the writing of these steps.

29.	Check the user_impersonation checkbox and click Add permission.

30.	Go back to Home and open the PrioritZFL function app.

31.	Select Configuration.

32.	Click + New application setting.

33.	Enter ClientID for Name.
34.	Go to your notepad and copy the PrioritZFL API application ID.
35.	Go back to the portal, paste the ID you copied in the Value field, and click OK.


36.	Click + New application setting again.
37.	Enter ClientSecret for Name.
38.	Go to your notepad and copy the PrioritZFL API Secret.
39.	Go back to the portal, paste the secret you copied in the Value field, and click OK.
40.	Click + New application setting again.
41.	Enter TenantID for Name.
42.	Go to your notepad and copy the Tenant ID.
43.	Go back to the portal, paste the Tenant ID you copied in the Value field, and click OK.
44.	Click + New application setting one more time.
45.	Enter DataverseURL for Name.
46.	Start a new browser window or tab and navigate to Power Platform admin center  and select Environments.
47.	Click to open the Dev environment you are using for this lab.
48.	Copy the Environment URL.


49.	Go back to the portal, paste the URL you copied in the Value field, and click OK.
50.	You should see the four application settings you added. Click Save.


51.	Click Continue.
52.	Navigate to https://login.microsoftonline.com/{tenant id}/adminconsent?client_id={api app id} Replace {tenant id} and {api app id} with tenant id and PrioritZFL API application ID from your notepad. If you are not a tenant administrator, you will need to work with your trainer/administrator to consent. You can provide them the link to speed up the process.
53.	Click Accept.
