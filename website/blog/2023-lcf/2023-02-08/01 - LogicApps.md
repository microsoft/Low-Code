---
slug: 2023-day8
title: 8. Serverless Low Code
authors: [april, matt, nitya, sonja]
draft: true
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 3
keywords: [Azure Logic Apps, Serverless, Low Code, Power Automate, Azure Functions]
image: ../../static/img/banner.png
description: "FIXME: Used in meta tag. If not specified, becomes first line of Markdown" 
tags: [low-code-february, 30-days-of-lowcode, learn-live, zero-to-hero, ask-the-expert,fusion-teams, power-platform, logic-apps, azure-logic-apps, azure-functions, power-automate]
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
    content="@codemillmatt" />
  <meta name="twitter:site" content="@AzureAdvocates" /> 
  <link rel="canonical" 
    href="https://microsoft.github.io/Low-Code/blog/slug-FIXME" />
</head>

Welcome to `Day 8` of #28DaysOfLowCode!

The theme for this week is Integrations. Yesterday we talked about Low Code + Dataverse. Today we'll explore the topic of serverless low code and piecing together a workflow with Azure Logic Apps.

## What We'll Cover

* Serverless and Low Code?
* Azure Logic Apps overview
* Let's build a Logic App
* Logic Apps compared to Power Automate
* Resources

<!-- FIXME: banner image -->
![Empty Banner Placeholder](../../../static/img/banner.png)

<!-- ************************************* -->
<!--  AUTHORS: ONLY UPDATE BELOW THIS LINE -->
<!-- ************************************* -->

## Serverless and Low Code?

Are you sitting down? Because I'm about to tell you that there's something out there that combines the best of serverless computing with low code development. And that's ... Azure Logic Apps.

Serverless computing lets you worry less about the underlying infrastructure your code is running on and concentrate more on the code itself.

A benefit of serverless computing is that you don't write huge applications, instead you write small functions that do one specific task. For example, respond to an HTTP request. Or process a message from a queue.

Then within that function, you write code that deals with the task. Any logic, or connections to other services - that's pretty much on you to write code for.

Azure Logic Apps brings the Low Code world to serverless computing. You still solve a problem in a concise of a manner as possible with a Logic App - and the Logic App is started by some sort of event. But instead of writing code, you use a visual designer to piece together a workflow.

## Azure Logic Apps overview

At its heart, Azure Logic Apps automates the execution of business processes by using a visual designer to create workflows.

But what sets Logic Apps apart, are its pre-made components.

When you're creating a Logic App, you arrange pre-made components into a sequence - or a workflow. These components are designed to communicate with external services. So you can specify - all in a visual designer - what event should trigger a workflow to start and then what actions should occur.

![A diagram showing the step you'll take when building a logic app.](./1-app-design-process.png)

As I mentioned, there are literally hundreds of external services (or components) you can connect your Logic App to. And the beauty of it is, the Logic Apps runtime takes care of managing the connections to the services. You don't have to worry about writing code to establish connections or check connectivity - Logic Apps has your back.

![A graphic showing various 3rd party services a logic app can connect to.](./2-external-services.png)

Building a Logic App is the process of building a workflow using the components to solve your business problem. Each component will have different triggers that will start a workflow, and different actions that it can take when a workflow is running. How you use them is up to you.

![A diagram showing an example Logic App workflow that detects the sentiment of a tweet.](./3-service-use.png)

## Building a Logic App

We're not going to create a Logic App from front to back, step-by-step, in this article. That's really worth it's own article and we have some [documentation](https://learn.microsoft.com/azure/logic-apps/quickstart-create-first-logic-app-workflow?WT.mc_id=dotnet-82212-masoucou) that will take you through that process.

Rather I want to concentrate on the major pieces and decision points that you'll make when creating a Logic App.

### Connecting to other services

Now let's pause for a second to talk about all of these services that you can connect your Logic Apps workflow to. A _connector_ is a component that provides an interface to an external service. For example, the Twitter connector allows you to send and retrieve tweets, while the Office 365 Outlook connector lets you manage your email, calendar, and contacts.

There are literally hundreds of connectors from Microsoft and 3rd party vendors that you can use to build your workflows with.

A connector uses the external service's REST API to do its work. When you use the connector in your Logic App workflow, the connector calls the service's underlying API for you.

![A diagram of how a connector works](./6-connector.png)

If you can't find a connector that suits your needs? You can build one yourself! It's called a custom connector, and this [series](https://learn.microsoft.com/en-us/connectors/custom-connectors/?WT.mc_id=dotnet-82212-masoucou) of [articles](https://learn.microsoft.com/en-us/connectors/custom-connectors/create-logic-apps-connector?WT.mc_id=dotnet-82212-masoucou) will show you how to make your REST API into a connector!

### Kicking off the logic

The very first decision you'll need to make when creating a Logic App is to decide what type of event, or _trigger_ will start the workflow running. The trigger specifies the condition to meet before any actions defined in the Logic App execute. Each time the trigger fires, the Logic Apps runtime creates and runs the workflow instance.

There are a ton of different triggers you can choose from. A workflow can be started with events as varied as a new email arriving to a new message arriving in an Azure Storage queue.

![A screenshot showing the 2 different triggers for an Azure Storage Queue](./5-queue-triggers.png)

### Performing actions

If a trigger kicks off a workflow, then an action performs a specific task while the workflow is running.

A connector can be composed of many actions and triggers. For example, the Dropbox connector has triggers to monitor for when a file is created or modified. And it has actions to create a file, list files in a folder, and so on.

![Diagram showing the Dropbox connector triggers and actions](./7-dropbox-connector-details.png)

You string together actions, after the triggering event, to perform the business logic of your Logic App. But what if your logic had branches or conditions in it?

### Controlling actions

A control action routes the execution within a workflow based on conditions. 

Consider the Azure DevOps connector's Build Complete trigger kicking off a workflow. If the build status is _failed_, then a text message could be sent using the Azure Communication Service's connector. Otherwise if the build status is successful, a message could be posted to a chat in Microsoft Teams using its connector.

The _if_ statement is a conditional action. There are others controlling actions such as _switch_ statements, _for each_ and _until_ loops.

## Logic Apps compared to Power Automate

<!-- DANIEL - TAKE IT FROM HERE!!! -->
Now, you may be thinking to yourself - Logic Apps sound a lot like Power Automate. And you're not wrong, they're both workflow-based services that work with connectors to other services.

In fact, Power Automate is built upon Azure Logic Apps!


## Resources

* Take a [self-paced training course](https://learn.microsoft.com/training/modules/intro-to-logic-apps/?WT.mc_id=dotnet-82212-masoucou) on Azure Logic Apps!
* [Azure Logic Apps documentation](https://learn.microsoft.com/azure/logic-apps/?WT.mc_id=dotnet-82212-masoucou)
* [Power Automate documentation](https://learn.microsoft.com/power-automate/getting-started?WT.mc_id=dotnet-82212-masoucou)
