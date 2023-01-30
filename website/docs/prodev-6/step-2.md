---
sidebar_position: 1
title: 2. Configure Service Principal
---

:::info LAB SCENARIO

Working as part of the PrioritZ fusion team you will be configuring GitHub Actions using the Power Platform Build Tools to automate the team’s deployments.


In **Exercise 2** you will create service principal. The service principal will be used by the GitHub workflow actions, so they don’t execute under your individual user identity.
:::

## 2.1 Create app registration

1.	Navigate to `https://portal.azure.com/`
2.	Select Azure active directory.
3.	Select App registrations.
4.	Click + New registration.

5.	Enter GitHub Deploy `<Your Name>` e.g., GitHub Deploy Lab Admin 1 for Name, select Accounts in this organizational directory only for Supported account types, and click Register.

6.	Copy the `Application (client) ID` and the `Directory (tenant) ID`. Keep the ids in a notepad, you will need them in future steps.

7.	Select Certificates and secrets.
8.	Click + New client secret.
9.	Enter Lab admin GitHub client secret for Description, select 3 months for Expires, and click Add.

10.	Copy the Value and save it on a notepad, you will need this value in future step. The value will not show again after you leave this page.

## 2.2 Create app user in Dataverse

In this task, you will be registering the app you created in Azure Active Directory into the dev and test Dataverse environments.   You will also be assigning a security role that will allow the service principal to deploy solutions.

1.	Navigate to Power Platform admin center 
2.	Select Environments.
3.	Select your Dev environment and click Settings.
4.	Expand Users + permissions and select Application users.

5.	Click + New app user.
6.	Click + Add an app.

7.	Select application registration you created and click Add.
8.	Select your Business unit and click Create. There should only be one unless you created more.
9.	Select the application user you just created and click Edit security roles.

10.	Select System administrator and click Save.
11.	Select Environments again.
12.	Select your Test environment and click Settings.
13.	Expand Users + permissions and select Application users.


14.	Click + New app user.
15.	Click + Add an app.


16.	Select application registration you created and click Add.
17.	Select your Business unit and click Create.
18.	Select the application user you just created and click Edit security roles.


19.	Select System administrator and click Save.
20.	Select Environments and click to open the Dev environment.
21.	Copy the Environment URL and keep it on a notepad, you will use this URL in future steps.


22.	Select Environments and click to open the Test environment.
23.	Copy the Environment URL and keep it on a notepad, you will this URL in future steps.
