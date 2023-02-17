---
slug: 2023-day17
title: 17. Build a PCF Control
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

Welcome to `Day 17` of #30DaysOfLowCode!

The theme for this week is **User Interface** and we're ending it off with a quick tutorial on PCF Components! Yesterday, I wrote about the [Power Apps Component Framework](https://microsoft.github.io/Low-Code/blog/2023-day16) and highlighted why you would want to use it, what the advantages are, as well as the composition of a PCF Component. Today, as promised, we'll be building a simple code component step-by-step.

## What We'll Cover
 * **Recap**: Power Apps Component Framework
 * **Scenario**: What are we building today?
 * **Build**: Let's make a Code Component!
 * 
 * **Exercise**: Training - [Use advanced features with Power Apps component framework](https://aka.ms/LCF/BuildMorePCF)
 * **Resources**: Explore the [Low Code February Collection](https://aka.ms/lowcode-february/collection)

<!-- FIXME: banner image -->
![Empty Banner Placeholder](../../../static/img/banner.png)

<!-- ************************************* -->
<!--  AUTHORS: ONLY UPDATE BELOW THIS LINE -->
<!-- ************************************* -->

## Power Apps Component Framework Recap
As mentioned in yesterday's blog, Power Apps Component Framework (PCF) empowers professional or traditional developers and app makers to create reusable code components for Canvas Apps and Model-Driven Apps. Sometimes, as app makers, we might reach certain limitations when it comes to building consistent, eye-catching but functional user experiences. The out-of-the-box controls within Power Apps might not fit all of our needs or maybe, we just want to stretch Power Apps' capabilities a little further. With PCF, you can build code components which are essentially visual controls that help you create a more customised user interface.

![A gif showing PCF Code Components in action](./code-components.gif)

## What are we building today? 
So, with Power Apps, there is generally a large amount of data that end users input into the app via a Text Input control. However, as we can see in this [reference page](https://aka.ms/LCF/TextInputControl), there is no "auto height" property. What I mean is whenever you use a Text Input, and you have a lot of text, the text input does not inherently have the ability to increase its own height based on the amount of text that you have. The normal behaviour here is that the Text Input will have a scrollbar that you can use to navigate through the large amount of text.

![An image showing the scroll bar on a Power Apps text input control](./Scrollbar.png)

This is the perfect opportunity for a professional developer to use their skills to solve this "low code" problem. And just to make sure, I'm not saying that a low code developer does not have the ability to create some sort of walkaround for this problem - we are just looking at this from the perspective of a professional developer and how they can contribute to Power Platform Solutions. Also, by creating a code component, app makers will be able to use this throughout all of their Power Apps. 

## Let's Make a Code Component!
Time to get started building with the Power Apps Component Framework, but first - 
 
### Pre-Requisites
> **Note**: This tutorial was completed using a Windows 11 Machine.

Before we get started, we will need to install the following:
1. Install [**Visual Studio Code (VS Code)**](https://aka.ms/LCF/VSCode) and ensure that the "Add to PATH" option is selected during installation.
2. Install [**Node.js**](https://nodejs.org/en/download/) (comes with npm). I recommend that you use a LTS (Long-Term Support) version.
3. Once VS Code is installed, go ahead and download and install the [**Power Platform Tools**](https://aka.ms/LCF/InstallPowerCLI) VS Code extension.

### Configure Power Apps Environment

Since we are building a code component for Power Apps, we need to make sure our Power Apps environment is prepared and configured. 

1. If you don't have a [ **Power Apps Developer Plan** ](https://aka.ms/lowcode-february/devplan)yet 👀, go ahead and sign up for one. It's FREE. 
2. Once that's done, log into the **[Power Platform Admin Center](https://admin.powerplatform.microsoft.com)** 
	* Select "**Environments**" on the left-hand side 
	* Click on the development environment that you've just created above. This will usually have the name: ***[Your Name]'s Environment**.*

  ![An image showing instructions to get to the Developer Environment](./Image1.png)

  3. Select "**Settings**" from the top command bar and navigate to Product > Features > Power Apps component framework for canvas apps. 
4. Activate the Toggle On setting for the **Allow publishing of canvas apps with code components** feature.

![An image showing the toggle on setting for PCF Components in Power Apps](./Image2.png)

5. Scroll down and select **Save**. 

Now we're good to go! 😃

### Create a Component Folder
We will need a working folder to store our Code Component solution. For ease of use, I usually create a folder in a place where I can easily access from a Command Prompt. On my computer, I've created a new folder called **LowCodeFeb** directly in the C:\ drive. So, I will be using `C:\LowCodeFeb`.

### Create a New Component Project
1. Start **Visual Studio Code**
2. Select **Terminal** and select **New Terminal**.
3. Change directory to your working folder.

```bash
	cd C:\LowCodeFeb
```
4. From your LowCodeFeb directory, create a directory named **dynamicTextInput-pcf**.

```bash
	mkdir dynamicTextInput-pcf
```
5. Change directory to **dynamicTextInput-pcf**.
```bash
	cd dynamicTextInput-pcf
```
6. Initialize your component project by using Power Platform CLI with the following command:
```bash
	pac pcf init --namespace SampleNamespace --name DynamicInputPCF --template field
```
This image shows an example of the output you should see: 

![An image showing the output of initializing your component with the Power Platform CLI](./Image3.png)

7. Install the project build tools by using the command `npm install`. Don't worry about any warnings you may see at this point. 
```bash
	npm install
```
8. Once completed, run the command below to open the component project in Visual Studio Code.
```csharp
	code -a .
```
Your opened project should look like this so far:

![An image showing the code component VS Code project structure](./Image4.png)

### Update Code Component's Manifest
Remember, from yesterday's blog - we established that the manifest is an XML file that defines the metadata and configuration of a code component. The manifest is an important file for a PCF code component because it is used by the Power Apps authoring tools to register and manage the component. This also includes the kind of data which is to be configured (field or dataset) and any other properties that can be configured in the application when the component is added.

1. Expand the **DynamicInputPCF** folder and open the **ControlManifest.Input.xml** file.
2. Near the top of the file, Change the version to **1.0.0** and description-key to **Dynamic Input**.

![An image showing the edited control tag in the project manifest](./Image5.png)

## Section 4

## Exercise

## Resources