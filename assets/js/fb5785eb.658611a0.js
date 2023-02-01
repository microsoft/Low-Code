"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2080],{4137:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var o=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,h=c["".concat(s,".").concat(d)]||c[d]||u[d]||n;return a?o.createElement(h,i(i({ref:t},m),{},{components:a})):o.createElement(h,i({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<n;p++)i[p]=a[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8094:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var o=a(7462),r=(a(7294),a(4137));const n={slug:"2023-day1",title:"1. Hello, 30DaysOfLowCode!",authors:["sonja","april","matt","nitya","justin","daniel","gomolemo","srikumar","julia","kartik","sameer","taiki","marcel","evan","casey","linda","phil"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["FIXME","comma","separated","keywords","for","metatags"],image:"../../../static/img/banner.png",description:"FIXME: Used in meta tag. If not specified, becomes first line of Markdown",tags:["low-code-february","30-days-of-lowcode","learn-live","zero-to-hero","ask-the-expert","fusion-teams","power-platform"]},i=void 0,l={permalink:"/Low-Code/blog/2023-day1",source:"@site/blog/2023-lcf/2023-02-01/Feb01 - Hello.md",title:"1. Hello, 30DaysOfLowCode!",description:"FIXME: Used in meta tag. If not specified, becomes first line of Markdown",date:"2023-02-01T00:00:00.000Z",formattedDate:"February 1, 2023",tags:[{label:"low-code-february",permalink:"/Low-Code/blog/tags/low-code-february"},{label:"30-days-of-lowcode",permalink:"/Low-Code/blog/tags/30-days-of-lowcode"},{label:"learn-live",permalink:"/Low-Code/blog/tags/learn-live"},{label:"zero-to-hero",permalink:"/Low-Code/blog/tags/zero-to-hero"},{label:"ask-the-expert",permalink:"/Low-Code/blog/tags/ask-the-expert"},{label:"fusion-teams",permalink:"/Low-Code/blog/tags/fusion-teams"},{label:"power-platform",permalink:"/Low-Code/blog/tags/power-platform"}],readingTime:3.96,hasTruncateMarker:!1,authors:[{name:"Sonja Gu",title:"Product Marketing Manager",url:"https://github.com/SonjaGu",imageURL:"https://github.com/SonjaGu.png",key:"sonja"},{name:"April Dunnam",title:"Power Platform Advocacy Lead",url:"https://github.com/AprilDunnam",imageURL:"https://github.com/AprilDunnam.png",key:"april"},{name:"Matt Soucoup",title:".NET Advocacy Lead",url:"https://github.com/codemillmatt",imageURL:"https://github.com/codemillmatt.png",key:"matt"},{name:"Nitya Narasimhan",title:"Sr. Cloud Advocate, Illustrator",url:"https://github.com/nitya",imageURL:"https://github.com/nitya.png",key:"nitya"},{name:"Justin Yoo",title:"Senior Cloud Advocate (.NET)",url:"https://github.com/justinyoo",imageURL:"https://github.com/justinyoo.png",key:"justin"},{name:"Daniel Laskewitz",title:"Senior Cloud Advocate",url:"https://github.com/Laskewitz",imageURL:"https://github.com/Laskewitz.png",key:"daniel"},{name:"Gomolemo Mohapi",title:"Cloud Advocate",url:"https://github.com/gomomohapi",imageURL:"https://github.com/gomomohapi.png",key:"gomolemo"},{name:"Srikumar Nair",title:"Principal Group Program Manager",url:"https://github.com/MicroSri",imageURL:"https://github.com/MicroSri.png",key:"srikumar"},{name:"Julia Kasper",title:"Program Manager II",url:"https://github.com/juliajuju93",imageURL:"https://github.com/juliajuju93.png",key:"julia"},{name:"Kartik Kanakasabesan",title:"Principal Program Manager",url:"https://github.com/kkanakas",imageURL:"https://github.com/kkanakas.png",key:"kartik"},{name:"Sameer Chabungbam",title:"Principal Program Manager Lead",url:"https://github.com/schabungbam",imageURL:"https://github.com/schabungbam.png",key:"sameer"},{name:"Taiki Yoshida",title:"Principal Program Manager",url:"https://github.com/taiki-yoshida",imageURL:"https://github.com/taiki-yoshida.png",key:"taiki"},{name:"Marcel Ferreira",title:"Senior Program Manager",url:"https://github.com/marcelbf",imageURL:"https://github.com/marcelbf.png",key:"marcel"},{name:"Evan Lew",title:"GPM, Power Apps (Ent. Platform)",url:"https://github.com/evanmlew",imageURL:"https://github.com/evanmlew.png",key:"evan"},{name:"Casey Burke",title:"Principal Product Manager",url:"https://github.com/caburk",imageURL:"https://github.com/caburk.png",key:"casey"},{name:"Linda Nichols",title:"Principal Solution Spec GBB",url:"https://github.com/lynnaloo",imageURL:"https://github.com/lynnaloo.png",key:"linda"},{name:"Phil Topness",title:"Power CAT (Customer Advisory Team)",url:"https://github.com/topness-msft/",imageURL:"https://github.com/topness-msft.png",key:"phil"}],frontMatter:{slug:"2023-day1",title:"1. Hello, 30DaysOfLowCode!",authors:["sonja","april","matt","nitya","justin","daniel","gomolemo","srikumar","julia","kartik","sameer","taiki","marcel","evan","casey","linda","phil"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["FIXME","comma","separated","keywords","for","metatags"],image:"../../../static/img/banner.png",description:"FIXME: Used in meta tag. If not specified, becomes first line of Markdown",tags:["low-code-february","30-days-of-lowcode","learn-live","zero-to-hero","ask-the-expert","fusion-teams","power-platform"]},nextItem:{title:"It's a Low Code February!",permalink:"/Low-Code/blog/2023-kickoff"}},s={authorsImageUrls:[void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0]},p=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Why Low Code?",id:"why-low-code",level:2},{value:"Start low coding with Microsoft",id:"start-low-coding-with-microsoft",level:2},{value:"The full Low-Code February lineup",id:"the-full-low-code-february-lineup",level:2},{value:"Get started today!",id:"get-started-today",level:2}],m={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("meta",{name:"twitter:url",content:"https://microsoft.github.io/Low-Code/blog/slug-FIXME"}),(0,r.kt)("meta",{name:"twitter:title",content:"FIXME: Title Of Post"}),(0,r.kt)("meta",{name:"twitter:description",content:"FIXME: Post Description"}),(0,r.kt)("meta",{name:"twitter:image",content:"FIXME: Post Image"}),(0,r.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.kt)("meta",{name:"twitter:creator",content:"@nitya"}),(0,r.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,r.kt)("link",{rel:"canonical",href:"https://microsoft.github.io/Low-Code/blog/slug-FIXME"})),(0,r.kt)("p",null,"Welcome to ",(0,r.kt)("inlineCode",{parentName:"p"},"Day 01")," of #30DaysOfLowCode!"),(0,r.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Why Low-Code?"),(0,r.kt)("li",{parentName:"ul"},"Start low coding with Microsoft!"),(0,r.kt)("li",{parentName:"ul"},"The full Low-Code February lineup  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Exercise:")," Take the ",(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/training/challenges?id=464c05e3-f1ae-400f-b5df-2dcd5299d347&%3FWT.mc_id=javascript-82212-ninarasi"},(0,r.kt)("strong",{parentName:"a"},"Cloud Skills Challenge!"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"}," Resources:")," Sign up for the free ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/lowcode-february/devplan"},(0,r.kt)("strong",{parentName:"a"},"Power Apps Developer Plan!")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Empty Banner Placeholder",src:a(9011).Z,width:"1334",height:"560"})),(0,r.kt)("h2",{id:"why-low-code"},"Why Low Code?"),(0,r.kt)("p",null,"As the market for low-code platform continues to flourish (with projected growth this year of nearly 20% over 2022), now is the time to explore what it can mean for you. "),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://powerapps.microsoft.com/what-is-low-code/"},(0,r.kt)("strong",{parentName:"a"},"Low-code development"))," are becoming more popular as businesses look for ways to modernize their IT infrastructure and generate more output in less time. "),(0,r.kt)("p",null,"Developers can focus on the creative aspects of app building while still taking advantage of powerful cloud computing technologies such as scalability, security, and reliability."),(0,r.kt)("p",null,"Starting today, we invite you to spend a month getting the low-down on low-code development with an exciting series of tutorials, workshops, and interactive resources during ",(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/lowcode-february"},(0,r.kt)("strong",{parentName:"a"},"#LowCodeFebruary")),"."),(0,r.kt)("h2",{id:"start-low-coding-with-microsoft"},"Start low coding with Microsoft"),(0,r.kt)("p",null,"With ",(0,r.kt)("a",{parentName:"p",href:"https://powerapps.microsoft.com/"},(0,r.kt)("strong",{parentName:"a"},"Microsoft Power Apps"))," you can quickly build custom apps with drag-and-drop tools and pre-built templates, making it easier to create powerful apps that are tailored for your needs.  Low-code development with Azure helps businesses accelerate their innovation cycle and make the most out of their data resources. "),(0,r.kt)("p",null,"Low-code app development through Microsoft Power Platform and Azure can be used to automate workflows, reduce manual efforts, and speed up the development process for building line-of-business apps at a lower cost."),(0,r.kt)("p",null,"According to ",(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/2022ForresterTEI"},(0,r.kt)("strong",{parentName:"a"},"Forrester")),", composite organizations experience benefits of ",(0,r.kt)("strong",{parentName:"p"},"140% ROI")," and ",(0,r.kt)("strong",{parentName:"p"},"45% cost reduction")," in app development when using Power Platform premium capabilities. The majority of users say Power Platform\u2019s premium capabilities increase revenue and offers faster solution quoting through better data integration. "),(0,r.kt)("p",null,"In other words, with Power Platform you\u2019ll produce more and better code than before, with increased cost savings. That means developing more projects and delivering increased value to your clients. With low code, everyone wins!"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Empty Banner Placeholder",src:a(4336).Z,width:"1600",height:"900"})),(0,r.kt)("h2",{id:"the-full-low-code-february-lineup"},"The full Low-Code February lineup"),(0,r.kt)("p",null,"We want to give developers the resources you need to enhance your knowledge and skill in low code. ",(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/lowcode-february"},(0,r.kt)("strong",{parentName:"a"},"Low Code February"))," is a month-long celebration during which we\u2019ll help participants learn the nuts and bolts of low-code development. "),(0,r.kt)("p",null,"You will have access to a series of hands-on workshops, self-guided learning courses, skill challengies, conversations with experts, and a community of fellow learners that will give you the necessary tools to start building in 30 days. "),(0,r.kt)("p",null,"All throughout Low Code February we\u2019ll be running ",(0,r.kt)("strong",{parentName:"p"},"6 hero initiatives")," to help you get the most of your newfound knowledge:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://microsoft.github.io/Low-Code/lowcode-february/30Days/"},(0,r.kt)("strong",{parentName:"a"},"#30DaysOfLowCode"))," blog series, during which developers can engage with a daily lesson and skill up on ",(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/power-platform/power-fx/overview"},"PowerFX"),", ",(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/power-apps/developer/component-framework/overview"},"PCF")," (Power Apps Component Framework), ",(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/power-platform/alm/overview-alm"},"ALM")," (App Lifecycle Management), ",(0,r.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/products/devops/"},"Azure DevOps"),", ",(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/power-platform/alm/devops-github-actions"},"GitHub Actions"),", and more. ")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://microsoft.github.io/Low-Code/lowcode-february/30Days/"},(0,r.kt)("strong",{parentName:"a"},"#30DaysOfLowCode"))," \ud83d\udcc5 roadmap:")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Week 1\ufe0f\u20e3: Fundamentals")," Kick off with a comprehensive introduction to low code with onboarding experience, tooling, developer stories and more.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Week 2\ufe0f\u20e3: Backend Integrations")," Dive into the nitty-gritty of low-code development with topics like built-in connectors, dataverse, custom connectors, API management, and Azure integration. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Week 3\ufe0f\u20e3: User Interface"),"\nPut your knowledge to the test by building a Canvas app, plus get an introduction to PowerFX, power component framework controls, and advanced use cases.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Week 4\ufe0f\u20e3: Dev Experience"),"\nTake your skills to the next level with tutorials on ALM, GitHub Actions, app governance, Power Platform pipelines, and automated testing. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Week 5\ufe0f\u20e3: Wrap-up")))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/lowcode-february/ZeroToHero/"},(0,r.kt)("strong",{parentName:"a"},"#ZeroToHero"))," \ud83e\uddb8\u200d\u2640\ufe0f Get the latest updates on technologies and products for low code development directly from product teams."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/lowcode-february/Video-Live/"},(0,r.kt)("strong",{parentName:"a"},"Video + Livestream"))," \ud83d\udcfb Join online conversations with product teams and ask questions.  "),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/lowcode-february/challenge"},(0,r.kt)("strong",{parentName:"a"},"Cloud Skills Challenge"))," \u2601\ufe0f Skill up on key cloud technologies with free, self-guided learning courses, and compete to make the leaderboard!"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs/intro/"},(0,r.kt)("strong",{parentName:"a"},"Dev Workshops"))," \u2692\ufe0f Explore workshops in your own time as you work through various\nfeatures or solutions in self-guided mode."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://pnp.github.io/powerplatform-samples/"},(0,r.kt)("strong",{parentName:"a"},"Community Buzz"))," \ud83d\udca1 Connect with the community and contribute your expertise by building interesting demos or writing articles.")),(0,r.kt)("h2",{id:"get-started-today"},"Get started today!"),(0,r.kt)("p",null,"Want to get started on your low code development journey with us? Here are some actions you can take today:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/lowcode-february/devplan"},(0,r.kt)("strong",{parentName:"a"},"Sign up"))," for the free Power Apps Developer Plan. \ud83d\ude4c "),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/lowcode-february/challenge"},(0,r.kt)("strong",{parentName:"a"},"Enroll"))," in the Cloud Skills Challenge and start climbing that leaderboard! \u2601\ufe0f"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"http://aka.ms/lowcode-february"},(0,r.kt)("strong",{parentName:"a"},"Save"))," the page and ",(0,r.kt)("a",{parentName:"li",href:"https://microsoft.github.io/Low-Code/blog/rss.xml"},(0,r.kt)("strong",{parentName:"a"},"Subscribe"))," to the blog in your favorite feed reader for updates. \ud83d\udd16")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Empty Banner Placeholder",src:a(5173).Z,width:"1334",height:"560"})))}c.isMDXComponent=!0},4336:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/01 - Kickoff-b6ff5da871188894bc9935af9614742c.png"},5173:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/Feb01 - Banner-d9bab2b92d758942447a4cbc50aef715.png"},9011:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/Feb01 - Hello-f906ee6cccd32845783130584ee304aa.png"}}]);