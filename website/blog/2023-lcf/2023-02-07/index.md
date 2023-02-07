---
slug: 2023-day7
title: 7. Low Code & Dataverse
authors: [april, matt, nitya, sonja]
draft: true
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 3
keywords: [FIXME, comma, separated, keywords, for, metatags]
image: ../../static/img/banner.png
description: "FIXME: Used in meta tag. If not specified, becomes first line of Markdown" 
tags: [low-code-february, 30-days-of-lowcode, learn-live, zero-to-hero, ask-the-expert,fusion-teams, power-platform]
---

<head>
  <meta name="twitter:url" 
    content="https://microsoft.github.io/Low-Code/blog/slug-FIXME" />
  <meta name="twitter:title" 
    content="FIXME: Title Of Post" />
  <meta name="twitter:description" 
    content="FIXME: Post Description" />
  <meta name="twitter:image" 
    content="FIXME: Post Image" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:creator" 
    content="@nitya" />
  <meta name="twitter:site" content="@AzureAdvocates" /> 
  <link rel="canonical" 
    href="https://microsoft.github.io/Low-Code/blog/slug-FIXME" />
</head>

Welcome to `Day #FIXME` of #28DaysOfLowCode!

The theme for this week is #FIXME. Yesterday we talked about #FIXME. Today we'll explore the topic of #FIXME.

## What We'll Cover
 * Section 1
 * Section 2
 * Section 3
 * Section 4
 * Exercise: Try this yourself!
 * Resources: For self-study!

<!-- FIXME: banner image -->
![Empty Banner Placeholder](../../../static/img/banner.png)


<!-- ************************************* -->
<!--  AUTHORS: ONLY UPDATE BELOW THIS LINE -->
<!-- ************************************* -->

### Do more with less for your Data - Microsoft Dataverse ###

Microsoft Dataverse is a SaaS data platform that helps you ***easily create and manage your data, events, logic, and generate analytics, and insights to support interconnected apps and processes in a secure and compliant manner***. Dataverse, being a ***hyperscale polyglot storage***, can store any type of data (relational, file, observational etc.) for all your transactional or analytical applications. Dataverse is ***the*** data platform for all Power Platform products and Dynamics 365 applications, supporting both low-code and pro-code development. It is a critical element of Microsoft Power Platform, supporting all the data, events, analytics, and related processing, besides generating insights for citizen app makers and professional developers to build, store and manage data for their applications. 
 
Figure 1: Microsoft Dataverse and Power Platform
All these diverse types of data, in Dataverse, are represented externally as tables, which not only makes it easy for citizen developers to use it as excel but also accelerates design and development time and cost, for professional developers .Dataverse includes a base set of standard tables that cover typical scenarios, also known as Common Data Model (CDM), but you can also customize or create new custom tables specific to your needs.

Dataverse -Under the hood
Dataverse enables integrated, intelligent systems of action of the data that is stored. Dataverse achieves this by leveraging Azure services, so it is built on Azure and extends with Azure. 

 
Figure 2: Microsoft Dataverse Runs on Azure & Extends with Azure
All the building blocks of Dataverse i.e., storage, computing and insights are built on Azure. Similarly, if you need to extend the functionality, you can leverage your existing investments in Azure to augment your customer requirements. 
Why Dataverse? 

Microsoft Dataverse is much more than a database because it provides a managed SaaS data platform experience for citizen developers and professional developers to build, store, and manage data for their applications. Besides, it also provides a rich and intelligent computing layer to integrate and act on these diverse types of data through a rich API layer https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/overview, besides providing analytics and generating insights. In comparison, a database is usually standalone service running on Infrastructure as a Service(IaaS) or Platform as a Service (PaaS) that requires additional efforts, skills, and protocols to integrate, manage and maintain while interacting with other systems. 

Let’s look at some of these salient features of Dataverse. 

Data integration
Dataverse provides an ability to use out of the box power of Power Query via Power Platform Data Flows, Azure Data Factory (ADF) and Web API to enable low-code and pro developers to integrate external data with Dataverse. With few clicks, users can have a quick start experience to get the data from multitude of data sources specifically from Azure resources into Dataverse with rich, intuitive user experience. Pro dev deeply familiar with data transformations can extend queries and author complex transformations for both ADF and Power Query. A splendid example of using Dataverse data to create reports can be found here. 
Virtual Tables 
Another powerful feature about data integration with Dataverse is the introduction of Virtual Tables in Dataverse which allows you to integrate external data without moving it physically into Dataverse. With this new experience, you can create virtual tables from SharePoint and SQL without any code, and without leaving the maker portal. In minutes, you can set up your connection, pick your SharePoint Site or SQL Database, select your SharePoint List or SQL Table, and your virtual table will appear in table hub (Maker experience in https://make.powerapps.com ) ready to use.

 
Figure 3 : Creating a Virtual Table in Microsoft Dataverse
You can try it out for yourself using this information https://powerapps.microsoft.com/en-us/blog/virtual-tables-creation-wizard-now-in-public-preview/ 


Advanced business logic, eventing, analytics, and insights at no additional cost
Besides Web API, Dataverse also provides several advanced business logic and eventing features like calculated fields and rollups, and automatic duplicate detection along with powerful built-in AI, Analytics through Power BI, Azure Cognitive Services, AI Builder.  DV allows pro-code extensibility via plug-ins https://learn.microsoft.com/en-us/power-apps/developer/data-platform/plug-ins and low code extensibility using Power FX like formula columns https://learn.microsoft.com/en-us/power-apps/maker/data-platform/formula-columns.

Additionally, there is built-in integration with Azure - With a few clicks, you can use Azure Synapse Link for Dataverse to bring your Dataverse data to Azure Synapse, visualize data in your Azure Synapse workspace, and rapidly start processing the data to discover insights using advanced analytics capabilities for serverless data lake exploration, code-free data integration, data flows for extract, transform, load (ETL) pipelines, and optimized Apache Spark for big data analytics. Here is how you can get started on this: Accelerate time to insight with Azure Synapse Link for Dataverse - Microsoft Power Platform Blog.

All these features are built-in into Dataverse and hence you do not have to spend any additional time or money managing additional compute services outside Dataverse platform; helps with total cost of ownership for an end-to-end business application.

Supports your geo-expansion plans.
Dataverse serves customers in 18 distinct geographic locations like Asia Pacific, Canada, Switzerland, France, Germany, UK, India, Japan, China, Korea, Norway, Australia, South America, Singapore, UAE, South Africa, North America, Europe and expanding to more regions. The latest availability information can be found in Product Availability by Geography | Dynamics 365 (microsoft.com) under Power Apps product, since Dataverse is the data platform for Power Platform products.

Availability and Reliability that you can depend on
Dataverse also provides high availability, reliability features like disaster recovery and business continuity capabilities for your production instance, by leveraging Azure availability zones and asynchronous cross-region replications using Azure paired regions. You can read more about these scenarios and solutions at  Business continuity and disaster recovery for Dynamics 365 SaaS apps - Power Platform | Microsoft Learn

Meets your hyperscale needs to run a modern enterprise.
With Dataverse you can store terabytes of data – all types of data like relational, non-relational, image, file etc. and process millions of transactions in a day. Dataverse also delivers fast and comprehensive search results experience in a single list, sorted by relevance, powered by Microsoft Azure Cognitive Search.

Enterprise grade Security, along with advanced risk and compliance features
Dataverse provides built-in enterprise-grade security that is based on Zero Trust(https://www.microsoft.com/en-us/security/business/zero-trust)  principles. The security layer spans across data and compute layer with robust authentication mechanisms and authorization mechanisms like role-based access model. Dataverse also supports advanced risk and compliance features like Customer Lockbox https://learn.microsoft.com/en-us/power-platform/admin/about-lockbox and Customer Managed Key https://learn.microsoft.com/en-us/power-platform/admin/manage-encryption-key 
Learn more about Dataverse Security features and capabilities covered in the Microsoft Dataverse Security white paper https://download.microsoft.com/download/9/e/d/9edefa88-50a0-4900-97f4-815bca5a7cb8/Dataverse-security-and-scenarios.pdf .  






