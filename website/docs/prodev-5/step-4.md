---
sidebar_position: 1
title: 3. Publish to Azure (2)
---


:::info LAB SCENARIO

Working as part of the PrioritZ fusion team you will be configuring a custom connector for a new API you build using Azure Functions. The team has decided to move the logic when a user creates a new “ask” to the Azure Function API. This will keep the Power App formula simple and allow more complex logic to be added in the future. In this lab you will create the function, use the Dataverse API, secure the API with Azure AD, configure a custom connector to use the API, and change the Power App to use the connector.

Note: This lab requires an Azure subscription (or trial) in the **same tenant** as your Dataverse environment.



In **Exercise 3** you will deploy the function to Azure.

:::

:::tip Important
This lab requires an 🅰️**Azure subscription (or trial)** in the **same tenant** as your Dataverse environment.
:::

## 3.3 Create Certificates

1.	Select **Certificates & secrets**.
2.	Click **New + client secret**.

![Lab-04 Image](./img/lab04%20(26).jpg)

3.	Provide a description, select **3 months**, and click **Add**.

![Lab-04 Image](./img/lab04%20(27).jpg)

::: Important
Copy the Value and keep it in a notepad as PrioritZFL API Secret. You need this value in future steps.

![Lab-04 Image](./img/lab04%20(28).jpg)
:::


## 3.4 Create and Configure API 

1.	Select **API permissions**.
2.	Click **+ Add a permission**.

![Lab-04 Image](./img/lab04%20(29).jpg)

3.	Select **Dynamics CRM**. Dynamics CRM is Dataverse, the Azure portal just hasn’t been updated as of the time of the writing of these steps.

![Lab-04 Image](./img/lab04%20(30).jpg)

4.	Check the **user_impersonation** checkbox and click **Add permission**.

![Lab-04 Image](./img/lab04%20(31).jpg)

5.	Go back to **Home** and open the **PrioritZFL** function app.

![Lab-04 Image](./img/lab04%20(32).jpg)

6.	Select **Configuration**.

![Lab-04 Image](./img/lab04%20(33).jpg)


## 3.5 Manage Application Setting

1.	Click **+ New application setting**.

![Lab-04 Image](./img/lab04%20(34).jpg)

2.	Enter **ClientID** for Name.

3.	Go to your notepad and copy the *PrioritZFL API application ID*.

4.	Go back to the portal, paste the ID you copied in the Value field, and click OK.

![Lab-04 Image](./img/lab04%20(35).jpg)

5.	Click **+ New application setting** again.
6.	Enter **ClientSecret** for Name.
7.	Go to your notepad and copy the **PrioritZFL API Secret**.
8.	Go back to the portal, paste the secret you copied in the Value field, and click OK.
9.	Click **+ New application** setting again.
10.	Enter TenantID for Name.
11.	Go to your notepad and copy the Tenant ID.
12.	Go back to the portal, paste the Tenant ID you copied in the Value field, and click OK.
13.	Click **+ New application** setting one more time.
14.	Enter **DataverseURL** for Name.
15.	Start a new browser window or tab and navigate to [**Power Platform admin center**](https://aka.ms/lowcode-february/admincenter) and select **Environments**.
16.	Open the Dev environment you are using for this lab. Copy the Environment URL.

![Lab-04 Image](./img/lab04%20(36).jpg)


17.	Go back to the portal, paste the URL you copied in the Value field, and click **OK**. You should see the four application settings you added. Click **Save**.

![Lab-04 Image](./img/lab04%20(37).jpg)

18.	Click Continue.

19.	Navigate to `https://login.microsoftonline.com/{tenant id}/adminconsent?client_id={api app id}` Replace {tenant id} and {api app id} with tenant id and PrioritZFL API application ID from your notepad. 👉 Then Accept.

:::warning Note
If you are not a tenant administrator, you will need to work with your trainer/administrator to consent. You can provide them the link to speed up the process. 
:::













