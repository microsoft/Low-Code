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

![Speaker Card for Feb 18](./../../../static/img/og/30-18.png)

<!-- ************************************* -->
<!--  AUTHORS: ONLY UPDATE BELOW THIS LINE -->
<!-- ************************************* -->

## Power Pages loves Fusion Dev teams
Power Pages provides rich features and supports a variety of tools that enable fusion teams with technology and domain expertise to collaborate on developing professional websites. 

Power Pages is unique in Power Platform as it address various audiences for your application that are **external and internal to your organization**. With Power Pages you can build websites that are completely public without users having to login or have users login via wider range of Identity Providers. 

![Power Pages differentiation in Power Platform](./01%20-%20PowerPages.png)

Power Pages makes it easy for low code makers to get started and launch sites quickly. Power Pages also enables Pro-developers with Web Development & Design background and help Fusion team shine by adding their skills to the project. For IT admins we alleviate worry about infrastructure without giving up trust with security and governance tools.

Thousands of customers across the global have been building and shipping solutions on Power Pages for years. PwC is one such customer who used their professional developer team skills, familiar tooling, and fusion team capabilities in Power Pages to deliver a compelling solution migrated from a full stack web application. Read more about it on [Microsoft Customer Story : PwC builds multitenant enterprise decision support site with Power Pages](https://customers.microsoft.com/story/1558972627174665363-pricewaterhousecoopers-banking-and-capital-markets-power-pages)

## Supporting Fusion teams 
Fusion teams usually consist of members with varying skills – 
1) There are **domain experts**, business users, subject matter experts who possess the functional knowledge and understanding of the uses cases of the websites they’d want to build for their business or organization and can usually contribute to the development via no-code / low-code configuration. 
2) There are **professional developers** who can write code and use advanced tools for developing pixel-perfect user experiences and implement complex functional requirements required for the website. 

Here is a diagram detailing features and capabilities from no code to pro code:

![Low Code to Pro Code Capabilities](01%20-%20LowCode_to_ProCode_capabilities.png)

We’ll get into more details of the ways in which Power Pages can support both ends of the Fusion team and their respective needs.   

## No Code & Configuration 
Makers can jumpstart the design of a site with out-of-the box site templates and customize with Power Pages Studio to meet their requirements. 

Power Pages studio is designed for low-code makers to rapidly build and style data centric business sites. It provides different workspaces for authoring, styling, data modelling and site configurations.

* **Pages** workspace - enables maker to design and build Web Pages with component like Forms, Lists, Power BI, Power BI Embedded and Power Virtual Agents. 
* **Styling** workspace - enables makers to create and apply global site styling. 
* **Data** workspace - enables makers to model, visualize and mange Dataverse tables, columns and their respective views and forms without leaving the studio. 
* **Setup** workspace - enables makers and admins to configure site settings/security. Security is an important consideration when building public facing websites and ensure that critical business information  is only accessible by the correct stakeholders.
    * Configure [Web roles]( https://learn.microsoft.com/en-us/power-pages/security/create-web-roles), [Table Permissions]( https://learn.microsoft.com/en-us/power-pages/security/table-permissions) and [Page Permissions]( https://learn.microsoft.com/en-us/power-pages/security/page-security) to provide and protect access to business information. 
    * Administrators can use [Power Apps portals admin center]( https://learn.microsoft.com/en-us/power-pages/admin/coe-portals) to manage their sites and environments. Administrators can configure custom domains, Restrict IP addresses and enable application integrations. 
    * Configure and enable [Identity Providers]( https://learn.microsoft.com/en-us/power-pages/security/configure-portal-authentication) like OpenID Connect, SAML 2.0, OAuth 2.0, Azure AD, LinkedIn, Facebook, Google, Twitter.  
    * Enable site performance managed with [CDN](https://learn.microsoft.com/en-us/power-apps/maker/portals/configure/configure-cdn)
    * Enable [Azure Web Application Firewall (WAF)](https://learn.microsoft.com/en-us/power-pages/security/web-application-firewall) to safeguard against common threats or setup IP Range to bring your own WAF or limit the site access
    * Set [Site Visibility](https://learn.microsoft.com/en-us/power-pages/security/site-visibility) while the project team is working on initial stages of the solution without potential of exposing it outside of the working team
    * Enable and setup [Progressive Web Application (PWA) configuration](https://learn.microsoft.com/en-us/power-pages/configure/progressive-web-apps) 
    * Integrate reporting using [Power BI AAD and Power BI Embedded (with RLS)](https://learn.microsoft.com/en-us/power-apps/maker/portals/admin/set-up-power-bi-integration) features
    * Use [Go live checklist]( https://learn.microsoft.com/en-us/power-pages/go-live/checklist#go-live-checklist-in-the-set-up-workspace) to make sure your website is ready for production use.

## Low Code & Pro Code
Power Pages also provides dedicated pro-developer tooling for fusion team members who are **technology experts** and want to customize the experience based on the specific business needs that are not supported via low code/no code experience.

### Support for code editor: Visual Studio Code & Visual Studio Code for web
Right in the same Power Pages Studio makers can switch between Studio low code experience to **[Visual Studio Code for Web](https://learn.microsoft.com/en-us/power-pages/configure/visual-studio-code-editor)** an Online code editor for web pro-developer experience in case they want to do advance customization. Alternatively, makers can go into advanced configuration via Portal Management Apps.

![Visual Studio Code for web animation](01%20-%20VSCode%20for%20web%20blog%20demo%2001.gif)

Makers who prefer working with **Visual Studio Code desktop** can use [Power Platform Tools extension]( https://learn.microsoft.com/en-us/power-apps/maker/portals/vs-code-extension) to unlock many Power Pages specific features like Autocomplete support, [Power Apps CLI](https://learn.microsoft.com/en-us/power-apps/maker/portals/power-apps-cli) support, Power Pages file icon theme and more. 

![Visual Studio Code for desktop animation](01%20-%20VSCode%20for%20desktop.gif)

### Extend power pages site with web development technologies
Familiar web development technologies like JavaScript, CSS and HTML to build custom design and interaction experience. Power Pages also provide extensibility points which pro-developers can leverage for their use case.

*	Tailor to the branding needs the stylesheet via CSS 
*	Add just the right custom business logic via JS Script 
*	Write custom UI or use any UI framework (React, Angular, etc)
*	Add dynamic content using [Liquid]( https://learn.microsoft.com/en-us/power-apps/maker/portals/liquid/liquid-overview)
*	Use [Power Pages Web APIs](https://learn.microsoft.com/en-us/power-apps/maker/portals/web-api-overview) to bind data in custom UI or perform more complex data operations safely using Power Pages security model 
*	Create re-usable Code Components or use existing [Code Component (PCF)](https://learn.microsoft.com/en-us/power-apps/maker/portals/component-framework) allowing your team to use similar skills from other areas of Power Platform 
*	Integrate with external data sources using Virtual tables

### CLI support
Developers can also **download the Website as local files** via [Power Platform Command Line Interface (aka PAC CLI)]( https://learn.microsoft.com/en-us/power-apps/maker/portals/power-apps-cli) translated into physical files, so popular tools like desktop Visual Studio or Visual Studio Code can be used and it’s easy to work with files in source control. 

![Use Power Platform CLI for Power Pages](01%20-%20PowerPagesSupport_for_PAC_CLI.png)

PAC CLI downloads Power Pages website customization into files and makes website friendly for source control. So, teams can use GitHub actions, Azure DevOps to standardize their deployment workflow and improve productivity.

## Supporting the large teams 
It is important to set up automated CI/CD (continuous integration and continuous delivery) pipelines when a large team is working on a project. So, teams can catch bugs in the initial stages. This improves the project quality and increases team productivity by reducing the manual steps to perform these activities. 

Power pages supports tooling required for CI/CD setup. And this includes
*	Native integration with [GitHub Actions and Azure DevOps](https://learn.microsoft.com/en-us/power-pages/configure/portals-alm)
*	Support for [deployment profile](https://learn.microsoft.com/en-us/power-apps/maker/portals/power-apps-cli#use-deployment-profile) which can be used for custom deployment on Dev/Test/Production environments.
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
