---
sidebar_position: 1
title: 1. Build Azure Function
---

:::info LAB SCENARIO

Working as part of the PrioritZ fusion team you will be configuring a custom connector for a new API you build using Azure Functions. The team has decided to move the logic when a user creates a new “ask” to the Azure Function API. This will keep the Power App formula simple and allow more complex logic to be added in the future. In this lab you will create the function, use the Dataverse API, secure the API with Azure AD, configure a custom connector to use the API, and change the Power App to use the connector.

In **Exercise 1** you install Azure tools extension for Visual Studio Code and create the function.

:::

:::tip Important
This lab requires an 🅰️**Azure subscription (or trial)** in the **same tenant** as your Dataverse environment.
:::


## 1.1 Create Azure Function

1.	Launch **Visual Studio Code**.
2.	Click **Terminal** and select **New Terminal**.

![Lab-04 Image](./img/lab04%20(1).jpg)

3.	Go to the terminal and run the command below to create new folder.
```
md ContosoFunctions
```

![Lab-04 Image](./img/lab04%20(2).jpg)

4.	Select **Azure Tool** and click **Sign in to Azure**.

![Lab-04 Image](./img/lab04%20(3).jpg)

5.	A browser popup should appear. Provide your **Azure** credentials and login.

6.	Press `[CONTROL + SHIFT + P]` to open the command palette.

7.	Type **create new project** and select **Create new project**.

![Lab-04 Image](./img/lab04%20(4).jpg)


8.	Select the **ContosoFunctions** folder you created and click **Select**.
9.	Select `C#` for language.
10.	Select `.NET 6 LTS` for .NET runtime.

![Lab-04 Image](./img/lab04%20(5).jpg)

11.	Select `HTTP trigger with OpenAPI` for template.
12.	Enter **CreateTopic** for function name and `ENTER`.

![Lab-04 Image](./img/lab04%20(6).jpg)


13.	Enter **Contoso.PrioritZ** for namespace and `ENTER`.

14.	Select **Anonymous** for AccessRights. Later we will protect the function using Azure AD.
15.	Select **Open in current window**.

![Lab-04 Image](./img/lab04%20(7).jpg)



16.	Your function should open in Visual Studio Code.
17.	Click **Terminal** and select **Run Build Task**.

![Lab-04 Image](./img/lab04%20(8).jpg)

:::tip Note
The build should succeed. Go to terminal and press any key close it.
:::