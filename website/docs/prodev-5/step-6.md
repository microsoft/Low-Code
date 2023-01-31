---
sidebar_position: 1
title: 5. Create Custom Connector
---

:::info LAB SCENARIO

Working as part of the PrioritZ fusion team you will be configuring a custom connector for a new API you build using Azure Functions. The team has decided to move the logic when a user creates a new “ask” to the Azure Function API. This will keep the Power App formula simple and allow more complex logic to be added in the future. In this lab you will create the function, use the Dataverse API, secure the API with Azure AD, configure a custom connector to use the API, and change the Power App to use the connector.

Note: This lab requires an Azure subscription (or trial) in the **same tenant** as your Dataverse environment.



In **Exercise 5** you will create a new custom connector.
:::


:::tip Important
This lab requires an 🅰️**Azure subscription (or trial)** in the **same tenant** as your Dataverse environment.
:::

## 5.1 Create custom connector

1.	Navigate to [**Azure Portal**](https://aka.ms/lowcode-february/workshop/azureportal) 
2.	Select **All resources**, search for the function app you deployed and click to open it.

![Lab-04 Image](./img/lab04%20(42).jpg)

3.	Copy the URL. Open a new browser tab or window and paste the URL you copied.

![Lab-04 Image](./img/lab04%20(43).jpg)

4.	Add `/api/swagger.json` to the end of the URL and `ENTER`. Click "Accept" if prompted for permissions.


![Lab-04 Image](./img/lab04%20(44).jpg)


5.	Right click on the swagger and select Save as.

![Lab-04 Image](./img/lab04%20(45).jpg)

6.	Save the file on your local machine.

7.	Navigate to [**Power Apps maker portal**](https://aka.ms/lowcode-february/makerportal) and make sure you have the **correct Dev environment** selected.

8.	Expand Dataverse and select **Custom Connectors**.

![Lab-04 Image](./img/lab04%20(46).jpg)

9.	Click on the chevron button next to the **New custom connector** and select **Import an OpenAPI file**.

![Lab-04 Image](./img/lab04%20(47).jpg)

10.	Enter **PrioritZ Connector** for name and click **Import**.

![Lab-04 Image](./img/lab04%20(48).jpg)

11.	Select the swagger file you saved and click Open. 👉 Then click Continue.

12.	Provide Description and advance to Security.

![Lab-04 Image](./img/lab04%20(49).jpg)

13.	Select **OAuth 2.0** for Authentication type.
14.	Select **Azure Active Directory** Identity provider.
15.	Copy the **PrioritZFL Connector application ID** from your notepad and paste it in the **Client id field**.
16.	Copy the **PrioritZFL Connector Secret** your notepad and paste it in the **Client secret** field.
17.	Copy the **Tenant ID** from your notepad and replace common with it in the **Tenant ID** field.
18.	Copy the **PrioritZ API application ID** from your notepad and paste it in the **Resource URL** field.
19.	Enter **true** for Enable on-behalf-of login.
20.	Click **Create connector**.

![Lab-04 Image](./img/lab04%20(50).jpg)

## 5.2 Test connector

1.	Select the **Test** tab. 👉 Click **+ New connection**. 👉 Click **Create**.

![Lab-04 Image](./img/lab04%20(51).jpg)

4.	Provide your credentials. 👉 Click Accept. 👉 Then Select the **Test** tab. 
6.	Select **Custom connectors** and click **Edit** on the **PrioritZ connector**.

![Lab-04 Image](./img/lab04%20(52).jpg)

:::tip Note
Make sure the connection you created is selected.
:::

9.	Turn on **Raw Body**. Provide the `JSON` below and click **Test operation**.

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

![Lab-04 Image](./img/lab04%20(53).jpg)

:::tip Note 
The operation test should succeed, and the response should look like the image below. 

![Lab-04 Image](./img/lab04%20(54).jpg)

:::



































