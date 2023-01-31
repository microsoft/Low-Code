---
sidebar_position: 1
title: 2. Configure Service Principal
---

:::info LAB SCENARIO

Working as part of the PrioritZ fusion team you will be configuring GitHub Actions using the Power Platform Build Tools to automate the team’s deployments.


In **Exercise 2** you will create service principal. The service principal will be used by the GitHub workflow actions, so they don’t execute under your individual user identity.
:::

:::tip Important
You will need **GitHub account** in this lab
:::


## 2.1 Create app registration

1.	Navigate to [**Azure Portal**](https://aka.ms/lowcode-february/workshop/azureportal) 

2.	👉 Azure active directory. 👉App registrations 👉 + New registration

![Lab-05 Image](./img/lab05%20(4).jpg)

3.	Enter GitHub Deploy `<Your Name>` 

:::tip For Example

e.g., GitHub Deploy Lab Admin 1 for Name, select Accounts in this organizational directory only for Supported account types, and click Register.
:::

![Lab-05 Image](./img/lab05%20(5).jpg)

4.	Copy the `Application (client) ID` and the `Directory (tenant) ID`. Keep the ids in a notepad, you will need them in future steps.

![Lab-05 Image](./img/lab05%20(6).jpg)

5.	Select Certificates and secrets. 👉 + New client secret.

6.	Enter Lab admin GitHub client secret for Description, select 3 months for Expires, and click Add.

![Lab-05 Image](./img/lab05%20(7).jpg)

7.	Copy the **Value** and save it on a notepad, you will need this value in future step. The value will not show again after you leave this page.

![Lab-05 Image](./img/lab05%20(8).jpg)

## 2.2 Create app user in Dataverse

In this task, you will be registering the app you created in Azure Active Directory into the dev and test Dataverse environments.   You will also be assigning a security role that will allow the service principal to deploy solutions.

1.	Navigate to [**Power Platform admin center**](https://aka.ms/lowcode-february/admincenter) 
2.	👉 Environments. 👉 Select your Dev environment and 👉 Settings.
3.	Expand Users + permissions and select **Application users**.

![Lab-05 Image](./img/lab05%20(9).jpg)

4.	👉 + New app user. 👉 + Add an app.

![Lab-05 Image](./img/lab05%20(10).jpg)

## 2.3 Create admin in Dataverse

1.	Select application registration you created and click **Add**.
2.	Select your Business unit and click **Create**. There should only be one unless you created more.
3.	Select the application user you just created and click **Edit security roles**.

![Lab-05 Image](./img/lab05%20(11).jpg)

4.	Select System administrator and click Save.
5.	👉 Environments again. 👉 your Test environment and 👉 Settings.
6.	Expand Users + permissions and select Application users.

![Lab-05 Image](./img/lab05%20(12).jpg)

14.	👉 + New app user. 👉 + Add an app.

![Lab-05 Image](./img/lab05%20(13).jpg)

16.	Select application registration you created and click Add.
17.	Select your Business unit and click Create.
18.	Select the application user you just created and click Edit security roles.

![Lab-05 Image](./img/lab05%20(14).jpg)

19.	👉 System administrator and 👉 Save.

## 2.4 Save Credentials 
20.	Select Environments and click to open the Dev environment.
21.	Copy the Environment URL and keep it on a notepad, you will use this URL in future steps.

![Lab-05 Image](./img/lab05%20(15).jpg)

22.	Select Environments and click to open the Test environment.
23.	Copy the Environment URL and keep it on a notepad, you will this URL in future steps.
