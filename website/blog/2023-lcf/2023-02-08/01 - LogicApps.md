---
slug: 2023-day8
title: 8. Serverless Low Code
authors: [matt, daniel]
draft: true
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 3
keywords: [low code, developer tools, onboarding, power platform, connectors, custom connectors, azure logic apps]
image: https://microsoft.github.io/Low-Code/img/og/30-08.png
description: "Let's explore the topic of serverless low code and piecing together a workflow with Azure Logic Apps."
tags: [low-code-february, 30-days-of-lowcode, learn-live, zero-to-hero, ask-the-expert,fusion-teams, power-platform, logic-apps, azure-logic-apps, azure-functions, power-automate]
---

<head>
  <meta name="twitter:url"
    content="https://microsoft.github.io/Low-Code/blog/2023-day8" />
  <meta name="twitter:title"
    content="8. Serverless Low Code" />
  <meta name="twitter:description"
    content="Let's explore the topic of serverless low code and piecing together a workflow with Azure Logic Apps." />
  <meta name="twitter:image"
    content="https://microsoft.github.io/Low-Code/img/og/30-08.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:creator"
    content="@codemillmatt" />
  <meta name="twitter:site" content="@AzureAdvocates" />
  <link rel="canonical"
    href="https://microsoft.github.io/Low-Code/blog/2023-day8" />
</head>

Welcome to `Day 8` of #30DaysOfLowCode!

The theme for this week is Integrations. Yesterday we talked about Low Code + Dataverse. Today we'll explore the topic of serverless low code and piecing together a workflow with Azure Logic Apps.

## What We'll Cover

* Serverless and Low Code?
* Azure Logic Apps overview
* Let's build a Logic App
* Logic Apps compared to Power Automate
* Resources

![Low Code and Serverless](./../../../static/img/og/30-08.png)

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

We're not going to create a Logic App from front to back, step-by-step, in this article. That's really worth it's own article and we have some [documentation](https://learn.microsoft.com/azure/logic-apps/quickstart-create-first-logic-app-workflow?WT.mc_id=dotnet-82212-masoucou&WT.mc_id=dotnet-82522-masoucou) that will take you through that process.

Rather I want to concentrate on the major pieces and decision points that you'll make when creating a Logic App.

### Connecting to other services

Now let's pause for a second to talk about all of these services that you can connect your Logic Apps workflow to. A _connector_ is a component that provides an interface to an external service. For example, the Twitter connector allows you to send and retrieve tweets, while the Office 365 Outlook connector lets you manage your email, calendar, and contacts.

There are literally hundreds of connectors from Microsoft and 3rd party vendors that you can use to build your workflows with.

A connector uses the external service's REST API to do its work. When you use the connector in your Logic App workflow, the connector calls the service's underlying API for you.

![A diagram of how a connector works](./6-connector.png)

If you can't find a connector that suits your needs? You can build one yourself! It's called a custom connector, and this [series](https://learn.microsoft.com/connectors/custom-connectors/?WT.mc_id=dotnet-82212-masoucou&WT.mc_id=dotnet-82522-masoucou) of [articles](https://learn.microsoft.com/connectors/custom-connectors/create-logic-apps-connector?WT.mc_id=dotnet-82212-masoucou&WT.mc_id=dotnet-82522-masoucou) will show you how to make your REST API into a connector!

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

Now, you may be thinking to yourself - Logic Apps sound a lot like Power Automate. And you're not wrong, they're both workflow-based services that work with connectors to other services.

In fact, Power Automate is built upon Azure Logic Apps!

### UI

They both have a user-friendly design surface to create your workflow on quickly. The difference is that Logic Apps allows you to build a bit more complex integration solutions and utilize advanced development tooling like Visual Studio or VS Code. Logic Apps has a recently refreshed designer, whereas Power Automate still uses the previous designer and is only accessible via the Power Automate portal.

### Connectors

On the connectors level, there are some differences. To make it a bit more clear for you, I have split the connectors section up in two parts:

#### Logic Apps only connectors

Logic Apps has the following connectors that are only available for Logic Apps:

* Azure Functions
* IBM 3270/MQ Series
* SAP
* Data Transformation
* Inline Code

Logic Apps offers a bunch of rich integrations with enterprise systems like IBM 3270 & MQ. Logic Apps also has a fairly advanced SAP connector which supports RFC, BAPI & IDOC actions. It also receives messages from SAP, which the SAP ERP connector from Power Automate can't. Next to the enterprise system connectors, it also offers extra features like Azure Functions integration, Data Transformation & Inline Code.

#### Power Automate only connectors

Power Automate also has connectors that are only available for Power Automate:

* AI Builder
* Approvals
* Desktop flows
* Power Apps
* Power Virtual Agents
* SAP ERP

Power Automate offers rich integration with Power Platform products like AI Builder, Approvals, Desktop flows (Robotic Process Automation aka RPA), Power Apps & Power Virtual Agents. It also has a SAP ERP connector which supports RFCs and BAPIs. It also has  [nice templates](https://powerautomate.microsoft.com/blog/announcing-deeper-sap-integration-for-the-power-platform/?WT.mc_id=dotnet-82212-masoucou) available that they have built since the [Clear Software acquisition](https://cloudblogs.microsoft.com/powerplatform/2021/10/22/microsoft-acquires-clear-software-to-enhance-connectivity-to-systems-of-record/?WT.mc_id=dotnet-82212-masoucou).

### Licensing

The licensing model is also different, I've listed the characteristics below:

#### Power Automate

Power Automate is licensed on a per-user, per-flow or Pay-as-you-Go basis.

* The per user model is the all you can eat model for Power Automate. You can create & use as much flows as you want, as long as your Dataverse storage is big enough & you haven't reached your [service limits](https://learn.microsoft.com/power-platform/admin/api-request-limits-allocations#licensed-user-request-limits?WT.mc_id=dotnet-82212-masoucou&WT.mc_id=dotnet-82522-masoucou). It has a version with and without attended Robotic Process Automation (RPA).
* The per flow model is a model that gives you the possibility to let an unlimited number of people within your organization run a flow.
* The pay-as-you-go model has been introduced not too long ago, and this is where you pay per flow run.

#### Logic Apps Consumption & Logic Apps Standard

There are two types of Logic Apps:

* Logic Apps Consumption
* Logic Apps Standard

Logic Apps Consumption is the type of Logic App that has been around for a while and it's the type of Logic App that Power Automate is based on. You pay per execution. And on top of that, you can pay a fixed fee for an Integration Services Environment. A Logic App can contain only one workflow.

Logic Apps Standard is a different type of Logic App. You pay a static monthly charge instead of per execution. With Logic Apps Standard, you can have multiple stateful and stateless workflows. You can also host Logic Apps Standard yourself, for instance in a Docker container.

### Built-In VNET

Logic Apps also has built-in Virtual Network (VNET) configuration included. This is something that Power Automate doesn't offer.

## Resources

* Take a [self-paced training course](https://learn.microsoft.com/training/modules/intro-to-logic-apps/?WT.mc_id=dotnet-82212-masoucou&WT.mc_id=dotnet-82522-masoucou) on Azure Logic Apps!
* [Azure Logic Apps documentation](https://learn.microsoft.com/azure/logic-apps/?WT.mc_id=dotnet-82212-masoucou&WT.mc_id=dotnet-82522-masoucou)
* [Power Automate documentation](https://learn.microsoft.com/power-automate/getting-started?WT.mc_id=dotnet-82212-masoucou&WT.mc_id=dotnet-82522-masoucou)
