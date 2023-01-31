---
sidebar_position: 1
title: 3. Create a GitHub Repo
---

:::info LAB SCENARIO

Working as part of the PrioritZ fusion team you will be configuring GitHub Actions using the Power Platform Build Tools to automate the team’s deployments.


In **Exercise 3** you will create a GitHub repository and add repository secrets.
:::

:::tip Important
You will need **GitHub account** in this lab
:::


## 3.1 Create Repository

1.	Navigate to [**GitHub**](https://aka.ms/lowcode-february/workshop/github)
2.	Sign in or signup for GitHub.
3.	👉 New repository. Enter PrioritZ for Repository name, select Public, check the Add a README file, and click Create repository.


4.	👉 Settings. Go to the Security section, expand Secrets and select Actions. 

:::warning Important
The values you provide will not be visible after you create the item so take your time to get the values correct.
:::

![Lab-05 Image](./img/lab05%20(16).jpg)
![Lab-05 Image](./img/lab05%20(17).jpg)

## 3.2 Create Repo Secret

1.	👉 New repository secret. 👉 PowerPlatformAppID for Name and paste the Application (client) ID from your notepad in the Value field and click Add secret.
2.	👉 New repository secret again. 👉 PowerPlatformClientSecret for Name and paste the secret Value from your notepad in the Value field and click Add secret.
3.	👉 New repository secret again. 👉 PowerPlatformTenantID for Name and paste the secret Tenant ID from your notepad in the Value field and click Add secret.
4.	👉 New repository secret again. 👉 PowerPlatformDevUrl for Name and paste the secret Dev environment URL from your notepad in the Value field and click Add secret.
5.	👉 New repository secret one more time. 👉 PowerPlatformTestUrl for Name and paste the secret Test environment URL from your notepad in the Value field and click Add secret.

:::tip Note
You should now have 5 repository secrets.

![Lab-05 Image](./img/lab05%20(18).jpg)
:::

## 3.3 Manage Permission

1.	On the left navigation in the Code and Automation section expand Actions and select General.

2.	Scroll down to the Workflow Permissions section. 👉 Read and write permissions. 👉 Save

![Lab-05 Image](./img/lab05%20(19).jpg)


:::tip Note
Do not navigate away from this page.
:::