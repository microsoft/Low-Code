---
slug: 2023-day16
title: 16. Intro to PCF Control
authors: [gomolemo]
draft: true
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 3
keywords: [power platform, low code, power component framework, tutorial]
image: https://microsoft.github.io/Low-Code/img/og/30-16.png
description: "Power Component Framework can be used to enhance the user experience for users working with data on forms, views, dashboards, and even canvas app screens. Learn more in #LowCodeFebruary." 
tags: [low-code-february, 30-days-of-lowcode, pcf, power-platform]
---

<head>
  <meta name="twitter:url" 
    content="https://microsoft.github.io/Low-Code/blog/2023-day16" />
  <meta name="twitter:title" 
    content="16. Intro to PCF Control" />
  <meta name="twitter:description" 
    content="Power Component Framework can be used to enhance the user experience for users working with data on forms, views, dashboards, and even canvas app screens. Learn more in #LowCodeFebruary." />
  <meta name="twitter:image" 
    content="https://microsoft.github.io/Low-Code/img/og/30-16.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:creator" 
    content="@nitya" />
  <meta name="twitter:site" content="@AzureAdvocates" /> 
  <link rel="canonical" 
    href="https://microsoft.github.io/Low-Code/blog/2023-day16" />
</head>

Welcome to `Day 16` of #30DaysOfLowCode!

The theme for this week is **User Interface**! Yesterday, [Julia](https://github.com/juliajuju93) spoiled us with a blog that highlighted [OpenAI and the Power Platform](https://microsoft.github.io/Low-Code/blog/2023-day15). Today we'll explore the topic of the *Power Apps Component Framework*! 

## What We'll Cover
 * What is the *Power Apps Component Framework (PCF)*?
 * Why would you want to *use* PCF?
 * What are the *advantages*?
 * The *composition* of a PCF component
 * **Exercise**: Training - [Build a Power Apps component](https://aka.ms/LCF/BuildPCF)
 * **Resources**: Explore the [Low Code February Collection](https://aka.ms/lowcode-february/collection)

![Speaker Card Feb 15](../../../static/img/og/30-16.png)


<!-- ************************************* -->
<!--  AUTHORS: ONLY UPDATE BELOW THIS LINE -->
<!-- ************************************* -->

## What is the Power Apps Component Framework?

Power Apps Component Framework (PCF) empowers professional or traditional developers and app makers to create reusable code components for Power Apps. What's great about these code components is that they work for both [Canvas Apps](https://aka.ms/LCF/Components4Canvas) and [Model-Driven Apps](https://aka.ms/LCF/Components4ModelDriven) and they can be used to enhance the user experience for users working with data on forms, views, dashboards, and even canvas app screens. 

## Why would you want to use PCF?

Sometimes, as app makers, we might reach certain limitations when it comes to building consistent, eye-catching but functional user experiences. The out-of-the-box controls within Power Apps might not fit all of our needs or maybe, we just want to stretch Power Apps' capabilities a little further. With PCF, you can build code components which are essentially visual controls that help you create a more customised user interface.

![A gif showing PCF Code Components in action](./code-components.gif)

### Types of PCF Components

These code components also allow for the integration of business logic which complements the visualisation for unique scenarios. There are two main types of components that you can create:

 * **Field**: A custom control for a field on a form. If you have a numeric value, instead of a simple text box with a number, you can represent it as a slider code component.
 * **Dataset**: A custom control to display rows of data. If you would like to go the more advanced route, you could take a boring dataset and represent that as a specialised interactive graph instead of a normal table. 

## What are the advantages of using PCF?
With the PCF's ability to tailor-make your apps to fit your specific needs and requirements, there must be other advantages to take note of, right? Of course! These include;

 * When it comes to **integration**, you have access to a rich set of framework APIs, 3rd-party libraries, and services that lets you incorporate external functionality and exposes capabilities like component lifecycle management, contextual data, and metadata.
 * Drastically improve and enhance the **user experience** with seamless server access via Web API, utility and data formatting methods; device features like camera, location, and microphone; and easy-to-invoke user experience elements like dialogs, lookups, and full-page rendering.
 * The **reusability** aspect because PCF components can be easily reused across multiple Power Apps reducing the development time and cost associated with creating custom functionality for each individual app.
 * Components built with PCF are optimised for **performance** due to the fact that they are designed to be lightweight ensuring that they do not slow down the overall application.
 * Use of **responsive** web design principles to provide an optimal viewing and interaction experience for any screen size, device, or orientation.

### Web Resources vs PCF

Before the PCF existed, HTML web resources were used to provide any type of custom presentation to a Power Apps' form. However, with the introduction of PCF, code components can now be bundled into a single solution file and rendered as part of the same context at the same time as any other components, providing a seamless experience for the user.

## The composition of a PCF component

A [solution](https://aka.ms/LCF/SolutionConcepts) can have code components, which can then be imported into a Dataverse environment. Professional / Traditional developers and app makers can then specify columns, subgrids, views, and dashboard subgrids to use in place of default components after importing the solution containing the code components. These coding elements can be added to Canvas Apps as well as Model-Driven Apps.

Code Components consists of 3 elements;
* Manifest
* Component implementation
* Resources

![Image showing the 3 main key areas of a PCF Component](./PCF-KeyAreas.png)

### Manifest
The manifest (`ControlManifest.Input.xml`) is the file that defines the metadata and configuration of a code component. It is an XML document that describes:
* **name**: The name of the component, which is used to identify it within the Power Apps authoring tools.
* **description**: A brief description of the component, which helps users understand what it does.
* **version**: The version number of the component, which is used to track changes and updates.
* **resource files**: A list of resource files that the component needs.

The manifest is an important file for a PCF code component because it is used by the Power Apps authoring tools to register and manage the component. This also includes the kind of data which is to be configured (field or dataset) and any other properties that can be configured in the application when the component is added.

### Component implementation
The component implementation in (PCF) refers to the code that defines the behaviour and appearance of the component. The component implementation is typically written in TypeScript or JavaScript and is compiled into a single solution that is loaded into the Power Apps authoring and runtime environments.

The [Power Platform CLI](https://aka.ms/LCF/PowerCLI) will auto-generate an `index.ts` file that includes stubbed implementations for methods described in the code component interface. These methods control the lifecycle of the code component and can include, but is not limited to;

* **init**: This is the entry point for the component and is called when the component is first loaded. The initialization function is responsible for setting up the component and registering any event listeners or other functionality.
* **updateView**: This function is called whenever the component's properties or state changes. It is responsible for re-rendering the component's user interface to reflect the updated state.
* **getOutputs**: Called by the framework prior to a component receiving new data. 
* **destroy**:  This method is invoked when the component is to be removed from the DOM tree. Use it for the cleanup and to release any memory that the component is using.

Overall, the component implementation is responsible for defining the functionality and appearance of the component, and for integrating it into the Power Apps environment so that it can be used by app makers.

### Resources
With PCF components, resources refer to the files and assets that are used to support the component implementation to implement its visualization. Resources can include things like images, icons, stylesheets, and other files that are necessary for the component to function properly. These are typically organized into a separate folder within the component project and are referenced by the component implementation code as needed.

## Exercise

Try the exercise in this [learn module](https://aka.ms/LCF/BuildPCF) where you will learn how to build your very first custom PCF component, create a code component solution package, and then test and debug the code component.

Also be sure to look out for tomorrow's blog where we will be building another PCF code component in a detailed step-by-step fashion. 

## Resources

* **Exercise**: Training - [Build a Power Apps component](https://aka.ms/LCF/BuildPCF)
* **Documentation**: [Power Apps Component Framework Overview](https://aka.ms/LCF/PCFDocs)
* **Watch**: [The Low Code Revolution Show](https://learn.microsoft.com/shows/the-low-code-revolution/?wt.mc_id=82054_collection_webpage_ece&ns-enrollment-type=Collection&ns-enrollment-id=8q5jhr1y0jeqj6)
* Low Code February [Learn Collection](https://learn.microsoft.com/users/nityan/collections/xz6ehr2mx031y0?WT.mc_id=javascript-82212-ninarasi): Collection of resources to go from learning Power Platform Fundamentals, to understanding the Dataverse and working in Fusion Development teams.

Also consider -

* Signing up for the free [Power Apps Developer Plan](https://aka.ms/lowcode-february/devplan) so you have access to the Power Platform.
* Enrolling in the [Cloud Skills Challenge](https://aka.ms/lowcode-february/challenge) to skill up on key cloud technologies with free, self-guided learning courses, and start climbing the leaderboard!

![Campaign Banner](./../../../static/img/og/30-banner.png)
