import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './styles.module.css';
import Image from '@theme/IdealImage';

// Section Header
function SectionHeader({title, description}) {
    return (
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">
            {title}
          </h1>
          <p> {description} </p>
        </div>
      </header>
    );
}

// Section Content
function SectionContent(){
    return (
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {ContentItems.map((props, idx) => (
              <ContentItem key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    );
}

// Content Item 
function ContentItem({title, description, topic, topiclink, link, imglink}){
    return (
        <div className={clsx('col col--4', styles.contentItem)}>
            <a href={link} target="_blank">
                <div className="text--center padding-horiz--md">
                <Image alt={"Thumbnail Image for"+title} img={imglink}/>
                </div>
                <div className="text--center padding-horiz--md">
                    <h3>{title} </h3>
                    <p>{description}</p>
                </div>
            </a>
            <div className="text--center padding-horiz--md">
                <a href={topiclink} target="_blank">
                    <span className="badge badge--primary">{topic}</span>
                </a>
            </div>
        </div>
    );
}

// Update this dataset with links to the last 20 roundups
const ContentItems = [

  {
    title: 'Pipelines in Power Platform is Generally Available (GA)',
    topic: 'ZeroToHero🚀',
    topiclink: 'https://powerapps.microsoft.com/en-us/blog/',
    imglink: 'https://powerappsblogscdn.azureedge.net/wp-content/uploads/2022/12/Pipelines-Preview-Blog-GIF.gif',
    link: "https://powerapps.microsoft.com/en-us/blog/pipelines-in-power-platform-is-generally-available-ga/",
    description: "Pipelines within Power Platform is generally available."
  },





  {
    title: 'OpenAI and Microsoft Power Platform',
    topic: 'ZeroToHero🚀',
    topiclink: 'https://techcommunity.microsoft.com/t5/apps-on-azure-blog/bg-p/AppsonAzureBlog',
    imglink: 'https://techcommunity.microsoft.com/t5/image/serverpage/image-id/441706iEF525535826D52CC/image-size/large?v=v2&px=999',
    link: "https://techcommunity.microsoft.com/t5/apps-on-azure-blog/build-next-gen-apps-with-openai-and-microsoft-power-platform/ba-p/3742289",
    description: "Build your nex-gen application with OpenAI and Power Platform"
  },




  {
    title: 'Meet the developers',
    topic: 'ZeroToHero🚀',
    topiclink: 'https://powerapps.microsoft.com/blog/category/uncategorized/',
    imglink: 'https://powerappsblogscdn.azureedge.net/wp-content/uploads/2023/02/ginibrandon_cover-1024x576.png',
    link: "https://aka.ms/PowerForPros",
    description: "Meet the developers combining Power Platform and Azure to go faster"
  },


  {
    title: 'Power Apps January 2023 Feature Update',
    topic: 'Announcements',
    topiclink: 'https://powerapps.microsoft.com/blog/category/uncategorized/',
    imglink: 'https://powerappsblogscdn.azureedge.net/wp-content/uploads/2023/02/AssesmentTool.png',
    link: "https://powerapps.microsoft.com/blog/whats-new-power-apps-january-2023-feature-update/",
    description: "Welcome to the Power Apps monthly feature update! We will use this blog to share a summary of product, community, and learning updates from throughout the month so you can access it in one easy place."
  },

  {
    title: '2023 Gartner® Magic Quadrant™',
    topic: 'Thought Leadership',
    topiclink: 'https://powerapps.microsoft.com/blog/category/uncategorized/',
    imglink: 'https://powerappsblogscdn.azureedge.net/wp-content/uploads/2022/12/powerplatform-for-blog-1024x576.png',
    link: "https://powerapps.microsoft.com/blog/",
    description: "Microsoft named a Leader in 2023 Gartner® Magic Quadrant™ for Enterprise Low-Code Application Platforms for the fourth consecutive time ..   over 7.4M monthly active developers of Microsoft Power Platform."
  },
  {
    title: 'Forrester TEI highlights 3 benefits of Power Platform premium capabilities',
    topic: 'Thought Leadership',
    topiclink: 'https://cloudblogs.microsoft.com/powerplatform/content-type/thought-leadership/',
    imglink: 'https://cloudblogs.microsoft.com/powerplatform/wp-content/uploads/sites/39/2022/11/MSC21_PICHA_office_20208-1024x683.jpg',
    link: "https://cloudblogs.microsoft.com/powerplatform/2022/11/28/forrester-tei-highlights-3-benefits-of-power-platform-premium-capabilities/",
    description: "We recently commissioned a Forrester Total Economic Impact study to help customers better understand the value of Microsoft Power Platform premium capabilities. This study expounds on how premium capabilities empower enterprises to unlock more business value using the platform."
  },
  {
    title: '2023 Dynamics 365, Power Platform release wave 1 plans!',
    topic: 'Announcements',
    topiclink: 'https://cloudblogs.microsoft.com/dynamics365/content-type/announcements/',
    imglink: 'https://cloudblogs.microsoft.com/dynamics365/wp-content/uploads/sites/4/2023/01/CLO22_HybridWork_039-1024x683.jpg',
    link: "https://cloudblogs.microsoft.com/dynamics365/bdm/2023/01/25/2023-release-wave-1-plans-for-microsoft-dynamics-365-and-power-platform-now-available/",
    description: "On January 25, 2023, we published the 2023 release wave 1 plans for Microsoft Dynamics 365 and Microsoft Power Platform, a compilation of new capabilities planned to be released between April 2023 and September 2023."
  },
  {
    title: 'Johnson Controls: Saved 3.6K+ hours on training enablement',
    topic: 'Customer Stories',
    topiclink: 'https://powerapps.microsoft.com/blog/category/case-studies/',
    imglink: 'https://powerappsblogscdn.azureedge.net/wp-content/uploads/2023/01/DMWL-Johnson-Controls-2.png',
    link: "https://powerapps.microsoft.com/blog/johnson-controls-simplifies-their-infrastructure-saving-3610-hours-on-training-enablement/",
    description: "Johnson Controls simplifies their infrastructure, saving 3,610 hours on training enablement!"
  },
  {
    title: 'Rabobank: Reduced processing time from 3 weeks to 3 minutes',
    topic: 'Customer Stories',
    topiclink: 'https://powerapps.microsoft.com/blog/category/case-studies/',
    imglink: 'https://powerappsblogscdn.azureedge.net/wp-content/uploads/2022/11/image-1.png',
    link: "https://powerapps.microsoft.com/blog/rabobank-streamlines-processes-taking-three-weeks-to-three-minutes/",
    description: " Rabobank currently uses more than 2,500 Power Apps and Power Automate solutions. One instance reduced processing time from three weeks to three minutes, another automated 40-50% of customer calls ."
  },
  {
    title: 'Coca-Cola United: Automates Handling of 50K+ orders',
    topic: 'Customer Stories',
    topiclink: 'https://powerapps.microsoft.com/blog/category/case-studies/',
    imglink: 'https://powerappsblogscdn.azureedge.net/wp-content/uploads/2022/12/cocacola_united_dmwl_infographic-1-1024x378.png',
    link: "https://powerapps.microsoft.com/blog/coca-cola-united-automates-multi-step-sap-invoicing-process-power-platform/",
    description: "Coca-Cola United used Power Platform to reduce order validation time from half a day to seconds, and automated a complex multi-step SAP invoicing process to handle 50K+ orders "
  },

  {
    title: 'Power Platform Developer Tools November update',
    topic: 'App Lifecycle Management (ALM)',
    topiclink: 'https://powerapps.microsoft.com/blog/category/alm/',
    imglink: 'https://powerappsblogscdn.azureedge.net/wp-content/uploads/2022/12/text-description-automatically-generated.png',
    link: "https://powerapps.microsoft.com/blog/power-platform-developer-tools-november-update/",
    description: "We are glad to announce the release of our final 2022 deliverable, the November update for Power Platform CLI, Azure DevOps, and GitHub actions. Read this month’s update to learn about great new features available!"
  },
  {
    title: 'Power Platform build tools and Azure DevOps',
    topic: 'App Lifecycle Management (ALM)',
    topiclink: 'https://powerapps.microsoft.com/blog/category/alm/',
    imglink: 'https://powerappsblogscdn.azureedge.net/wp-content/uploads/2022/11/graphical-user-interface-text-application-descr.png',
    link: "https://powerapps.microsoft.com/blog/power-platform-build-tools-and-azure-devops/",
    description: "We have had a lot of requests to clarify best practices for using Power Platform Build Tools (PP.BT) for Azure DevOps and are delighted to share more about this in this post!"
  },
  {
    title: 'Automate deployments with pipelines in Power Platform, now in preview',
    topic: 'App Lifecycle Management (ALM)',
    topiclink: 'https://powerapps.microsoft.com/blog/category/alm/',
    imglink: 'https://powerappsblogscdn.azureedge.net/wp-content/uploads/2022/12/Pipelines-Preview-Blog-GIF.gif',
    link: "https://powerapps.microsoft.com/blog/automate-deployments-with-power-platform-pipelines-now-in-preview/",
    description: "Pipelines aims to democratize application lifecycle management (ALM) for Power Platform and Dynamics 365 customers by bringing deployment automation capabilities into Managed Environments in a manner that’s more approachable for all makers, admins, and developers"
  },
  {
    title: 'Making Dataverse available for all makers',
    topic: 'Dataverse',
    topiclink: 'https://powerapps.microsoft.com/blog/category/dataverse/',
    imglink: 'https://powerappsblogscdn.azureedge.net/wp-content/uploads/2023/01/PreviewDemo-7.gif',
    link: "https://powerapps.microsoft.com/blog/making-it-easier-to-work-with-dataverse/",
    description: "Working with Dataverse is now becoming easier with ‘Developer environment’ that comes with premium capabilities, without any additional cost. "
  },
  {
    title: 'Protecting data with Dataverse: Security from External Threats',
    topic: 'Dataverse',
    topiclink: 'https://powerapps.microsoft.com/blog/category/dataverse/',
    imglink: 'https://learn.microsoft.com/power-apps/maker/data-platform/media/data-platform-cds-intro/platform.png',
    link: "https://powerapps.microsoft.com/blog/protecting-data-with-dataverse/",
    description: "In this blog series, we will be covering how to protect data in Dataverse from external and internal threats (both from internal users and Microsoft). In today’s post, we will focus on protecting data from external threats."
  },
  {
    title: 'Protecting data with Dataverse: Security from Internal Threats',
    topic: 'Dataverse',
    topiclink: 'https://powerapps.microsoft.com/blog/category/dataverse/',
    imglink: 'https://learn.microsoft.com/power-apps/maker/data-platform/media/data-platform-cds-intro/platform.png',
    link: "https://powerapps.microsoft.com/blog/protecting-data-with-dataverse-part-2-security-from-internal-threats-users/",
    description: "In this blog series, we will be covering how to protect data in Dataverse from external and internal threats (both from internal users and Microsoft). In today’s post, we will focus on protecting data from internal user threats. "
  },
];

//ZeroToHero Page
export default function Zero2Hero() {
    const {siteConfig} = useDocusaurusContext();
    const pageProps = {
        title: "🚀 Zero To Hero",
        description: "Get the latest updates on technologies and products for low code development - directly from product teams! We'll roundup the latest blog posts, announcements and livestream events featuring the product team, so check back periodically for updates! And don't forget to subscribe to our blog to be notified of new content!"
    };
    return (
      <Layout
        title={pageProps.title}
        description={pageProps.description} >
        <SectionHeader 
            title={pageProps.title}
            description={pageProps.description} />
        <main>
            <SectionContent/>
        </main>
      </Layout>
    );
}
