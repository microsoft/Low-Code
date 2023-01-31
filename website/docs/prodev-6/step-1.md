---
sidebar_position: 1
title: 1. App Lifecycle Management
---

:::info LAB SCENARIO

Working as part of the PrioritZ fusion team you will be configuring GitHub Actions using the Power Platform Build Tools to automate the team’s deployments.


In **Exercise 1** you will manually export the Contoso Badges connector solution from the Dev environment and import it to Test environment. You will be doing this promotion manually for this solution so you see how it can be done. However, in a real project it could all be automated using the build tasks you will use in the remaining parts of this lab.
:::

:::tip Important
You will need **GitHub account** in this lab
:::

## 1.1 Promote Solution to Test Environment

1.	Navigate to [**Power Apps maker portal**](https://aka.ms/lowcode-february/makerportal) and make sure you are in your dev environment.

2.	Select Solutions. 👉 Choose the Contoso Badges connector solution and click Export solution.

![Lab-05 Image](./img/lab05%20(1).jpg)

3.	Click Publish and wait for the publishing to complete.  Then 👉 Next.
4.	Select Managed and 👉 Export. Wait for the solution to be exported. Once complete, click Download.

![Lab-05 Image](./img/lab05%20(2).jpg)

:::info Important
In the interest of time, we’ve only added steps to export the solution as managed.  

It is best practice to also export the unmanaged solution and keep it available for future edits if needed.  

The steps to follow are essentially the same regardless of the exported solution being managed, or unamanged.
:::

## 1.2 Import solution
1.	Navigate to [**Power Apps maker portal**](https://aka.ms/lowcode-february/makerportal) and select your Test environment. Choose Solutions, then 👉 Import solution.

![Lab-05 Image](./img/lab05%20(3).jpg)

2.	Hit **Browse**. Select the solution you exported from the Dev environment and click **Open**. Then 👉 Next.
3.	👉 **Import** and wait for the import to complete.

:::tip Note
The solution should import successfully.

Do not navigate away from this page.
:::