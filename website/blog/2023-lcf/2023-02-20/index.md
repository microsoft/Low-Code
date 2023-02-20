---
slug: 2023-day20
title: 20. ALM For Power Apps
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

Welcome to `Day #FIXME` of #30DaysOfLowCode!

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

## What is Application Lifecycle Management (ALM) ?

Application Lifecycle Management is an very large encompassing term. Which is absolutely true, because you are managing the life of an Application from its birth to finally retiring it.
Now, there is a perception that ALM is only valid traditional software development projects, and those perceptions maybe right. The applications being built by Power Platform are also applications, and applications by nature need to be managed especially when low code applications are now being built for organization's turn key products. Application Lifecycle management is culmination of a problem solving effort by combining people, process, and tools to address a purpose/outcome.

## What falls within realm of ALM?

ALM can be seen via various terms, such as:
  -Digital transformation : where an organization adopts technology to help improve value, productivity,risk management, efficiency, and manage costs
  -DevOps (Development + Operations)               : It is the union of people, process, and tools to enable continuous delivery to your users of your service
  -DevSecOps (Development + Security + Operations) : It is an approach built on top of DevOps and incorporating a security mindset from the get go
  -Legacy Application development                  : Managing the Application lifecycle of a mature product line
  -New Application development                     : Managing the Application lifecycle of a nascent product line

Now there is SDLC which stands for Software Development Lifecycle, it is also part of ALM but focuses mostly on the software development side of things.

In short, all these terms are part of application lifecycle management, as a matter of fact, any time a new application is developed, it will have to be managed eventually!

## Power Platform and Application Lifecycle Management

Power Platform helps you develop applications quicker and faster, so it has the capabilities to be part of Application Management initiatives of an organization. When implementing Application Lifecycle Management with Power Platform, three things need to be considered

- Environment Management                : This entails the strategy you want to implement when embarking on ALM. Typically most common ALM pattern from an environments perspective is to have environments that map to Development, Test, and Production.  

- Organize the artifacts in Solutions   : PowerApps, PowerAutomate Flows, Power Virtual Agents, AI Builder, PowerBI, and Power Pages assets need to be within solutions

- Managing Deployments                  : When solutions are deployed from Development, to Test, to Production what are the mechanism that need to be employed and managed (i.e. Azure DevOps pipelines, GitHub actions, and Pipelines for Power Platform)  

## Solutions are important for Application Lifecycle Management

Beyond the components listed in the prior section, the additional components that are part of solution for enabling successful Application Lifecycle Management
![What is in a solution](./What-is-in-a-solution.png)

In addition, there are two types of solution, which are managed and unmanaged solutions.
-    Managed solutions  : Are immutable, as in once a solution becomes managed, it cannot be changed. Think of components that you use as a library for your application
-    Unmanaged solutions: These solutions can be changed, solutions when in your development environment are generally in the unmanaged state.

When committing solutions from a Power Platform developer environment, you need to export them, the solution renders itself as a zip file that can be then committed to source code repository.

## Deployment management

As mentioned before, there are various ways and means to deploy power platform applications, there are integrations with Azure DevOps and [GitHub Actions](../../2023-02-21/../2023-lcf/2023-02-21/index.md). In addition, Power Platform has an in-product deployment capability called [Pipelines for Power Platform](https://learn.microsoft.com/en-us/power-platform/alm/pipelines). This is designed for developers who may not have sophisticated ALM deployment needs.

## Resources
[ALM with Power Platform](https://learn.microsoft.com/en-us/power-platform/alm/)

[Environment Strategy](https://learn.microsoft.com/en-us/power-platform/alm/environment-strategy-alm)

[Solution Concepts](https://learn.microsoft.com/en-us/power-platform/alm/solution-concepts-alm)

[ALM Automation: Power Platform Build Tools for Azure DevOps](https://learn.microsoft.com/en-us/power-platform/alm/devops-build-tools)

[ALM Automation: Power Platform actions with GitHub](https://learn.microsoft.com/en-us/power-platform/alm/devops-github-actions)

[ALM Automation:Pipelines in Power Platform](https://learn.microsoft.com/en-us/power-platform/alm/pipelines)

![Campaign Banner](./../../../static/img/og/30-banner.png)
