---
slug: 2023-day18
title: 18. Power Pages for ProDevs
authors: [neeraj]
draft: false
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 3
keywords: [power platform, low code, power pages]
image: https://microsoft.github.io/Low-Code/img/og/30-18.png
description: "Power Pages for ProDevs" 
tags: [low-code-february, 30-days-of-lowcode, power pages,fusion-teams, power-platform]
---

<head>
  <meta name="twitter:url" 
    content="https://microsoft.github.io/Low-Code/img/og/30-18.png" />
  <meta name="twitter:title" 
    content="18. Power Pages for ProDevs" />
  <meta name="twitter:description" 
    content="Leverage Power Pages and fusion teams to quickly build public or internal facing websites. Learn more in #LowCodeFebruary, #30DaysofLowCode" />
  <meta name="twitter:image" 
    content="https://microsoft.github.io/Low-Code/img/og/30-18.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:creator" 
    content="@nitya" />
  <meta name="twitter:site" content="@AzureAdvocates" /> 
  <link rel="canonical" 
    href="https://microsoft.github.io/Low-Code/img/og/30-18.png" />
</head>

Welcome to `Day 18` of #30DaysOfLowCode!

## What We'll Cover
 * Power Pages ❤️ Fusion Dev teams
 * No Code & Configuration
 * Low Code & Pro Code
 * Supporting the large teams
 * **Activity**: Sign up for your [Power Apps Developer Plan](https://aka.ms/lowcode-february/devplan)
 * **Resources**: Explore the [Low Code February Collection](https://aka.ms/lowcode-february/collection)

<!-- FIXME: banner image -->
![Feb18](./feb18.png)


<!-- ************************************* -->
<!--  AUTHORS: ONLY UPDATE BELOW THIS LINE -->
<!-- ************************************* -->

## Power Pages loves Fusion Dev teams
Power Pages provides rich features and supports a variety of tools that enable fusion teams with technology and domain expertise to collaborate on developing professional websites. 

What makes Power Pages unique in Power Platform is ability to address various audiences for your application external and internal to your organization. With Power Pages you can build websites that are completely public without users having to login or have users login via wider range of standards based Identity Providers, including internal users. 

![Power Pages differentiation in Power Platform](./01%20-%20PowerPages.png)

Power Pages makes it easy for low code makers to get started and launch sites. Power Pages also is a place where Pro Devs with Web Development & Design background can help a Fusion team shine by adding their skills to the project. For IT admins we alleviate worry about infrastructure without giving up trust with security and governance tools.

Thousands of customers across the global have been building and shipping solutions on Power Pages for years. PwC is one such customer who used their professional developer team skills, familiar tooling, and fusion team capabilities in Power Pages to deliver a compelling solution migrated from a full stack web application – read more about it here [Microsoft Customer Story : PwC builds multitenant enterprise decision support site with Power Pages](https://customers.microsoft.com/story/1558972627174665363-pricewaterhousecoopers-banking-and-capital-markets-power-pages)


## Supporting Fusion teams 
Fusion teams usually consist of members with varying skills – 
1) There are domain experts, business users, subject matter experts etc. who possess the functional knowledge and understanding of the uses cases of the websites they’d want to build for their business or organization and can usually contribute to the development via no-code / low-code configuration. 
2) There are professional developers who can write code and use advanced tools for developing pixel-perfect user experiences and/or implement complex functional requirements required for the website. 
Here is a diagram detailing the incredible depth feature and of capabilities from no code to pro code:

![Low Code to Pro Code Capabilities](01%20-%20LowCode_to_ProCode_capabilities.png)

Below we’ll get into more details of the ways in which Power Pages can support both ends of the Fusion team and their respective needs.   

## No Code & Configuration 
Makers can jumpstart the design of a site with out-of-the box site templates and customize with Power Pages Studio to meeting their requirement. 

Power Pages design studio is designed for low-code makers to rapidly build and style data centric business sites. It provides different workspaces for authoring, styling, data modeling and site configurations.

*	Pages workspace – enables maker to design and build Web Pages with component like Forms, Lists, Power BI, Power BI Embedded and Power Virtual Agents. 
*	Styling workspace – enables makers to create and apply global site styling. 
*	Data workspace – enables makers to model, visualize and mange Dataverse tables, columns and their respective views and forms without leaving the studio. 
*	Setup workspace – enables makers and admins to configure site settings. 
    *	Security – Allow maker and admin to configure 
    *	Admin & Governance - 
    *	Authentication (AuthN) via many options for Identity Providers 
    *	Authorization (AuthZ) via visual configuration of Table Permissions 
    *	Enable site performance managed with CDN
    *	Enable the provided Azure Web Application Firewall (WAF) to safeguard against common threats or setup IP Range to bring your own WAF or limit the site access
    *	Set Site Visibility white the project team is working on initial stages of the solution without potential of exposing it outside of the working team
    *	Enable and setup Progressive Web Application (PWA) configuration 
    *	Integrate reporting using Power BI AAD and Power BI Embedded (with RLS) features
    *	Prepare to operate with dynamic Go Live Checklist analysis 
    *	Setup Custom domain and other settings


## Low Code & Pro Code
Power Pages also provides dedicated pro-developer tooling for fusion team members who are technology experts and want to customize the experience based on the specific business needs which are not supported via low code/no code experence. They can use

* Right in the same Power Pages Studio makers can switch between Studio low code experience to Visual Studio Code for Web an Online IDE for web pro-developer experience in case they want to do advance customization. Alternatively, makers can go into advanced configuration via Portal Management Apps.

![Visual Studio Code for web animation](01%20-%20VSCode%20for%20web%20blog%20demo%2001.gif)

*	Familiar web development technologies like JavaScript, CSS and HTML to build custom design and interaction experience. Power Pages also provide extensibility points which pro-developers can leverage for their usecase. 
    *	Tailor to the branding needs the stylesheet via CSS 
    *	Add just the right custom business logic via JS Script 
    *	Write custom UI or use any UI framework (React, Angular, etc)  
    *	Use Power Pages Web APIs to databind custom UI or perform more complex data operations safely in context Power Pages security model 
    *	Create re-usable Code Components or use existing Code Component (PCF) allowing your team to use simular skills from other areas of Power Plaform 
    *	Integrate with external data sources using Virtual tables
*	Developers can also download the Website as local files via Power Platform Command Line Interface (aka PAC CLI) translated into physical files, so that popular tools like desktop Visual Studio or Visual Studio Code can be used and it’s easy to work with files in source control.  Power Pages adds support to Power Platform Tooling Add-on with autocomplete and color coding for various Power Pages. 

![Use Power Platform CLI for Power Pages](01%20-%20PowerPagesSupport_for_PAC_CLI.png)

* PAC CLI download into file also makes a website friendly for sourcecontrol and deployment actions can be used in Github, Azure DevOps to standardize their workflow and improve productivity.

## Supporting the large teams 
It is important to set up automated CI/CD (continuous integration and continuous delivery) pipelines when a large team is working on a project. So, teams can catch bugs in the initial stages. This improves the project quality and increases team productivity by reducing the manual steps to perform these activities. 

Power pages supports tooling required for CI/CD setup. And this includes
*	Native integration with GitHub Actions and Azure DevOps 
*	Support for deployment profile which can be used for custom deployment on Dev/Test/Production environments.
*	Easy to use any web test framework (Example: Selenium)

## What’s Next?
* Signing up for the free **[Power Apps Developer Plan](https://aka.ms/lowcode-february/devplan)** so you have access to the Power Platform and you can try [Microsoft Power Pages](https://powerpages.microsoft.com)

* Watch the Power Pages session from [Powerful Devs 2023 Conference](https://learn.microsoft.com/events/learn-events/Powerful-Devs-2023/?WT.mc_id=javascript-82212-ninarasi)

* Watch the Power Pages session from Microsoft Ignite 2022 from [Power Pages: Low-Code Web Development | BRK40 - YouTube](https://www.youtube.com/watch?v=eOV3aXolYWs)

## Resources

* [**Video**: Getting started videos](https://learn.microsoft.com/power-pages/training-videos/?WT.mc_id=javascript-82212-ninarasi)
* [**Training**: Power Pages training](https://learn.microsoft.com/training/paths/power-pages-get-started/?WT.mc_id=javascript-82212-ninarasi)
* [**Documentation**: Microsoft Power Pages documentation](https://learn.microsoft.com/power-pages/?WT.mc_id=javascript-82212-ninarasi)
* [**Blog**: Microsoft Power Pages Blog](https://powerpages.microsoft.com/blog/)
* [**Community**: Microsoft Power Pages Community](https://powerusers.microsoft.com/t5/Microsoft-Power-Pages-Community/ct-p/MPPCommunity)
