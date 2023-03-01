"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[81445],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>g});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(o),m=n,g=c["".concat(l,".").concat(m)]||c[m]||d[m]||r;return o?a.createElement(g,s(s({ref:t},u),{},{components:o})):a.createElement(g,s({ref:t},u))}));function g(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,s=new Array(r);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:n,s[1]=i;for(var p=2;p<r;p++)s[p]=o[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},63282:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=o(87462),n=(o(67294),o(3905));const r={slug:"2023-day24",title:"24. Power Apps & Automated Testing",authors:["chris"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["low code","developer tools","power platform","automated testing","30DaysOfLowCode"],image:"https://microsoft.github.io/Low-Code/img/og/30-24.png",description:"Learn how to use right selection of tools to support good testing practices to manage app lifecycle for Power Apps - join us at #LowCodeFebruary and #30daysoflowcode https://aka.ms/lowcode-february",tags:["low-code-february","30-days-of-lowcode","power-platform","automated testing"]},s=void 0,i={permalink:"/Low-Code/blog/2023-day24",source:"@site/blog/2023-lcf/2023-02-24/index copy.md",title:"24. Power Apps & Automated Testing",description:"Learn how to use right selection of tools to support good testing practices to manage app lifecycle for Power Apps - join us at #LowCodeFebruary and #30daysoflowcode https://aka.ms/lowcode-february",date:"2023-02-24T00:00:00.000Z",formattedDate:"February 24, 2023",tags:[{label:"low-code-february",permalink:"/Low-Code/blog/tags/low-code-february"},{label:"30-days-of-lowcode",permalink:"/Low-Code/blog/tags/30-days-of-lowcode"},{label:"power-platform",permalink:"/Low-Code/blog/tags/power-platform"},{label:"automated testing",permalink:"/Low-Code/blog/tags/automated-testing"}],readingTime:6.225,hasTruncateMarker:!1,authors:[{name:"Chris Baldwin",title:"Principal Product Manager",url:"https://github.com/ChrisBal-MSFT",imageURL:"https://avatars.githubusercontent.com/u/23078985?v=4",key:"chris"}],frontMatter:{slug:"2023-day24",title:"24. Power Apps & Automated Testing",authors:["chris"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["low code","developer tools","power platform","automated testing","30DaysOfLowCode"],image:"https://microsoft.github.io/Low-Code/img/og/30-24.png",description:"Learn how to use right selection of tools to support good testing practices to manage app lifecycle for Power Apps - join us at #LowCodeFebruary and #30daysoflowcode https://aka.ms/lowcode-february",tags:["low-code-february","30-days-of-lowcode","power-platform","automated testing"]},prevItem:{title:"26. Recap - Dev Experience Week \u2728",permalink:"/Low-Code/blog/2023-day26"},nextItem:{title:"23. Power Platform and Governance",permalink:"/Low-Code/blog/2023-day23"}},l={authorsImageUrls:[void 0]},p=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Why automated testing is important",id:"why-automated-testing-is-important",level:2},{value:"Tools available today to test your Power Apps",id:"tools-available-today-to-test-your-power-apps",level:2},{value:"Test Studio",id:"test-studio",level:3},{value:"Test Engine",id:"test-engine",level:3},{value:"Plans and investments in automated testing",id:"plans-and-investments-in-automated-testing",level:2},{value:"Resources",id:"resources",level:2}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("meta",{name:"twitter:url",content:"https://microsoft.github.io/Low-Code/img/og/30-24.png"}),(0,n.kt)("meta",{name:"twitter:title",content:"24. Power Apps & Automated Testing"}),(0,n.kt)("meta",{name:"twitter:description",content:"Learn how to use right selection of tools to support good testing practices to manage app lifecycle for Power Apps - join us at #LowCodeFebruary and #30daysoflowcode https://aka.ms/lowcode-february"}),(0,n.kt)("meta",{name:"twitter:image",content:"https://microsoft.github.io/Low-Code/img/og/30-24.png"}),(0,n.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.kt)("meta",{name:"twitter:creator",content:"@nitya"}),(0,n.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,n.kt)("link",{rel:"canonical",href:"https://microsoft.github.io/Low-Code/img/og/30-24.png"})),(0,n.kt)("p",null,"Welcome to ",(0,n.kt)("inlineCode",{parentName:"p"},"Day 24")," of #30DaysOfLowCode!"),(0,n.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Why automated testing is important"),(0,n.kt)("li",{parentName:"ul"},"Tools available today to test your Power Apps"),(0,n.kt)("li",{parentName:"ul"},"Plans and investments in this area"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Resources"),": Explore the ",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/lowcode-february/collection"},(0,n.kt)("strong",{parentName:"a"},"Low Code February Collection"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Activity"),": ",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/lowcode-february/devplan"},(0,n.kt)("strong",{parentName:"a"},"Sign up"))," for the ",(0,n.kt)("strong",{parentName:"li"},"free")," Power Apps Developer Plan.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"feb24",src:o(51247).Z,width:"1334",height:"560"})),(0,n.kt)("h2",{id:"why-automated-testing-is-important"},"Why automated testing is important"),(0,n.kt)("p",null,"Automated testing is an important part of the app lifecycle. Our goal is to provide customers with the right selection of tools to support good testing practices. Customers often start with manual testing when apps are in their earlier stages.  But, we hear about customers who strive to introduce automated testing into their overall workflows and processes once they reach these inflection points:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"As apps grow in complexity")," - As usage increases and makers respond to more and more feature requests in their apps, complexity grows as well.  Maybe an app calls out to an external API or has extensive Power Fx logic within it.  These are pieces that all must work together to ensure the proper functioning of your app, so it's important to make sure that they all come together to provide value from the end-user's perspective.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"As collaborators get involved")," - Collaboration is key, but the more cooks in the kitchen you have the more things can change unexpectedly.  How can you best ensure that when multiple people are collaborating on an app that changes don't introduce instability and other uenxpected behavior?  Running automated tests when changes are made can help ensure that apps stay functional when their are multiple collaobrators. ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"As apps become more business critical")," - More and more customers are trusting Power Apps with business critical processes.  Simply put, if the app doesn't function then core business processes or functions may also be impacted.  Automated testing can help to ensure continuity of the app functionality upon which your business processes depend.  And, better stability can lead to increased end user trust and satisfaction when using apps."))),(0,n.kt)("p",null,"Let's take a look at what's available."),(0,n.kt)("h2",{id:"tools-available-today-to-test-your-power-apps"},"Tools available today to test your Power Apps"),(0,n.kt)("p",null,"There are a set of tools available today that you can use to test your apps.  "),(0,n.kt)("h3",{id:"test-studio"},"Test Studio"),(0,n.kt)("p",null,"Power Apps Test Studio is low-code solution to organize, record, and automate tests for canvas apps.  Test Studio features the following capabilities:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Test step recorder")," - Test Studio includes recording capabilities.  When you start the recorder, you can interact with the app as you expect your end users will. Test Studio will record your interactions as test steps.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Test editor")," - Once you've recorded test steps with Test Studio, the next step is to add your custom assertions. You can use the Test Studio UI to insert the assertions where they make sense in your app's flow.\n",(0,n.kt)("img",{alt:"Test Studio editor",src:o(16121).Z,width:"1123",height:"824"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Test playback")," - Test Studio can be run in Studio by pressing Play. If any of the assert statements you configured in the previous step were to fail, the test step will fail and you will be shown the error. or it can be integrated into CI/CD flows by following these instructions: ",(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/power-apps/maker/canvas-apps/test-studio-yaml-pipeline?WT.mc_id=javascript-82212-ninarasi"},"Automate tests with Azure Pipelines using YAML")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Test Studio playback",src:o(40253).Z,width:"666",height:"727"})))),(0,n.kt)("h3",{id:"test-engine"},"Test Engine"),(0,n.kt)("p",null,"Test Engine is an evolution of our Power Apps testing tools. Test Engine builds upon the key use cases of Test Studio, but takes it in a new, powerful direction through open source collaboration and use of the Playwright browser testing platform. The goals of Test Engine are to provide customers with a robust testing platform for all types of Power Apps, and to make it super easy to integrate automated testing into your app development processes."),(0,n.kt)("p",null,"A lot more information about Test Engine can be found in the blog post ",(0,n.kt)("a",{parentName:"p",href:"https://powerapps.microsoft.com/blog/introducing-test-engine-an-open-platform-for-automated-testing-of-canvas-apps/"},"Introducing Test Engine: An open platform for automated testing of canvas apps")),(0,n.kt)("p",null,"  ",(0,n.kt)("img",{alt:"Test Engine automating a test run",src:o(47684).Z,width:"1462",height:"923"})),(0,n.kt)("p",null,"Test Engine supports canvas apps today, with support for model-driven apps to come in the future.  Some of the key benefits of Test Engine are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Power Fx test authoring")," - Test steps are written in familiar Power Fx, without the need for a pro-code solution using C#, JavaScript, or other complex code.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Connector mocking")," - You can simulate the response your app receives from custom connectors.  This can be useful if you app hits an endpoint that has side effects, like inserting rows into Dataverse tables or kicking off Flows.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Screenshot function and video recording")," - This lets you grab screenshots and video recordings of unattended test runs.  This will capture exactly what the user would see if they were interacting with the app.  This makes it easy to debug and follow up on test failures.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Robust, stable tests")," - Test Engine has a special set of capabilities that abstract the app's browser DOM from you.  This means you create your tests by referencing the controls that you define at design-time, and you never need to worry about the specific output structure of the app in the browser.  Our goal here is that your tests should never break or need updating unless you make changes yourselves to the app being tested.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Reuse Test Studio tests")," - If you want to reuse any tests you have recorded using Test Studio, you can export the test plan files for reuse in Test Engine by clicking the Download suite button:"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Alt text",src:o(23716).Z,width:"483",height:"262"})))),(0,n.kt)("h2",{id:"plans-and-investments-in-automated-testing"},"Plans and investments in automated testing"),(0,n.kt)("p",null,"We are investing in this area and are working on a couple key things in this area:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"CI/CD integration - Our goal is to make it as easy as possible for you to integrate Test Engine into your CI/CD tools and make functional testing a regular, robust part of your app development process.  We are integrating Test Engine into the PAC CLI toolset to make it easy to use (so you will not have to build and run the Test Engine GitHub project), and we will be building Azure DevOps Pipelines and GitHub Actions support as well.  We hope that by integrating more tightly into this tooling, we will make automated testing a no brainer for your organization."),(0,n.kt)("li",{parentName:"ul"},"Model-driven app support - As stated before, Test Engine and Test Studio support canvas apps today.  We want to build support for model-driven apps so that you have one set of comprehensive tools that will work with all of your Power Apps."),(0,n.kt)("li",{parentName:"ul"},"Low-code recording enhancements - Eventually, we want to bring the ease of test case recording that customers have in Test Studio to Test Engine. We would love to hear your feedback around what we should be prioritizing to make it easier to create test plans for your apps.")),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Try out Test Engine")," - ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/microsoft/PowerApps-TestEngine#getting-started"},"Visit the Test Engine GitHub project")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Let us know any issues or feedback")," - ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/microsoft/PowerApps-TestEngine#getting-started"},"GitHub issues for Test Engine")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Let us know any general feedback about test tools")," - ",(0,n.kt)("a",{parentName:"li",href:"https://powerusers.microsoft.com/t5/Building-Power-Apps/Power-Apps-Test-Studio-Feedback-discussion-thread/td-p/455051"},"Test Studio discussion thread"))))}c.isMDXComponent=!0},47684:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/TE-Recording-840d661ebada877429aef8568b6fd0c9.gif"},16121:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/TS-EditSteps-8cdd4d8c39b39a1bf458d9b4e0f7efce.gif"},23716:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/TS-Export-e748d4e58c9dc6854ec98a178bb25144.png"},40253:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/TS-PlayMode-03997ec83a671d873939e4225b3f7239.png"},51247:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/30-24-874d179b63098bc1638eefc4781db9b7.png"}}]);