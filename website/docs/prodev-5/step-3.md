---
sidebar_position: 1
title: 3. Publish to Azure
---

:::info LAB SCENARIO

Working as part of the PrioritZ fusion team you will be configuring a custom connector for a new API you build using Azure Functions. The team has decided to move the logic when a user creates a new “ask” to the Azure Function API. This will keep the Power App formula simple and allow more complex logic to be added in the future. In this lab you will create the function, use the Dataverse API, secure the API with Azure AD, configure a custom connector to use the API, and change the Power App to use the connector.

Note: This lab requires an Azure subscription (or trial) in the **same tenant** as your Dataverse environment.



In **Exercise 3** you will deploy the function to Azure.

:::

## 3.1 Create & Deploy the Function App 
1.	Press `[CONTROL + SHIFT + P]` to open the command palette.
2.	Type create function and select **Create Function App in Azure**.
3.	Select **+ Create Function App**.

![Lab-04 Image](./img/lab04%20(14).jpg)


4.	Enter **PrioritZFuncFL** for function app name an `ENTER`. Replace FL with your **initials**.
5.	Select `.NET 6` and then 👉 Select your location.
7.	Wait for the function app to be created.
8.	Click **Deploy** and select **Deploy to Function App**.

![Lab-04 Image](./img/lab04%20(15).jpg)

9.	Select the function you created.

![Lab-04 Image](./img/lab04%20(16).jpg)

10.	Click **Deploy** and wait for the deployment to complete.

![Lab-04 Image](./img/lab04%20(17).jpg)


## 3.2 Authenticate Function in Azure  

11.	Navigate to [**Azure Portal**](https://aka.ms/lowcode-february/workshop/azureportal)

12.	Select **All resources**, search for the function app you deployed and click to open it.

![Lab-04 Image](./img/lab04%20(18).jpg)

13.	Select **Authentication** and click **Add identity provider**.

![Lab-04 Image](./img/lab04%20(19).jpg)

14.	Select **Microsoft** for Identity provider, 
15.	Select **Current tenant - Single tenant** and click **Add**.

![Lab-04 Image](./img/lab04%20(20).jpg)

16.	Go to the **Portal menu** page of Azure portal.
17.	Select **Azure Active Directory**.

![Lab-04 Image](./img/lab04%20(21).jpg)


18.	Select **App registrations**.
19.	Click to open the **PrioritZFuncFL**.

![Lab-04 Image](./img/lab04%20(22).jpg)

20.	Copy the **Application (client) ID** of the **PrioritZFuncFL** application registration and keep it on a notepad as **PrioritZFL API application ID**. Copy the **Directory (tenant) ID** and keep it on a notepad as **Tenant ID**. 

:::important Important
You will need the id in future steps.  The ID will be used to configure protection of the API. 

![Lab-04 Image](./img/lab04%20(23).jpg)

![Lab-04 Image](./img/lab04%20(25).jpg)

:::

