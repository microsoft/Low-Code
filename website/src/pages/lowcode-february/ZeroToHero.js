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
                <Image img={imglink}/>
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

// Update this dataset with links to the last 12 roundups
const ContentItems = [
  {
    title: 'Johnson Controls: Do More With Less',
    topic: 'Customer Stories',
    topiclink: 'https://powerapps.microsoft.com/blog/category/case-studies/',
    imglink: 'https://powerappsblogscdn.azureedge.net/wp-content/uploads/2023/01/DMWL-Johnson-Controls-2.png',
    link: "https://powerapps.microsoft.com/blog/johnson-controls-simplifies-their-infrastructure-saving-3610-hours-on-training-enablement/",
    description: "Johnson Controls simplifies their infrastructure, saving 3,610 hours on training enablement!"
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
    title: 'Making Dataverse available for all makers',
    topic: 'Dataverse',
    topiclink: 'https://powerapps.microsoft.com/blog/category/dataverse/',
    imglink: 'https://powerappsblogscdn.azureedge.net/wp-content/uploads/2023/01/PreviewDemo-7.gif',
    link: "https://powerapps.microsoft.com/blog/making-it-easier-to-work-with-dataverse/",
    description: "Working with Dataverse is now becoming easier with ‘Developer environment’ that comes with premium capabilities, without any additional cost. "
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
