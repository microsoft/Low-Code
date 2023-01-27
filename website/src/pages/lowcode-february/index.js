import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

import styles from './../index.module.css';

const CampaignFeatures = [
  {
    title: '#30DaysOfLowCode',
    Svg: require('@site/static/img/campaign/30days.svg').default,
    fillColor: "#f25022",
    link: "/Low-Code/lowcode-february/30Days",
    description: (
      <>
      Join us on a #30Day journey covering Power Platforms, Fusion Teams and Low Code Development!
      </>
    ),
  },
  {
    title: 'Zero To Hero',
    Svg: require('@site/static/img/campaign/hero.svg').default,
    fillColor: "#7fba00",
    link: "/Low-Code/lowcode-february/ZeroToHero",
    description: (
      <>
      Get the latest updates on technologies and products for low code development - directly from product teams!
      </>
    ),
  },
  {
    title: 'Video + Livestreams',
    Svg: require('@site/static/img/campaign/buzz.svg').default,
    fillColor: "#b66dff",
    link: "/Low-Code/lowcode-february/Video-Live",
    description: (
      <>
      Join us for live online events to learn and engage with experts, or catch up with video series and replays on your own time.
      </>
    ),
  },
  {
    title: 'Cloud Skills',
    Svg: require('@site/static/img/campaign/skills.svg').default,
    fillColor: "#ffb900",
    link: "/Low-Code/lowcode-february/CloudSkills",
    description: (
      <>
      Skill up on key cloud technologies with these free, self-guided learning courses - and make the leaderboard!
      </>
    ),
  },
  {
    title: 'Hands-on Workshops',
    Svg: require('@site/static/img/campaign/hacks.svg').default,
    fillColor: "#00a4ef",
    link: "/Low-Code/docs/intro",
    description: (
      <>
      Explore workshops in your own time, to work through various features or solutions in self-guided mode.
      </>
    ),
  },
  {
    title: 'Community Buzz',
    Svg: require('@site/static/img/campaign/ama.svg').default,
    link: "https://pnp.github.io/powerplatform-samples/",
    fillColor: "#fe6db6",
    description: (
      <>
      Have you built interesting low-code components, connectors, or applications? Wrote articles to help others? Share them with the community!
      </>
    ),
  },
];

function Feature({Svg, title, description, link, fillColor}) {
  return (
    <div className={clsx('col col--4')}>
      <a href={link} target="_blank">
        <div className="text--center">
          <Svg height="200px" width="200px" fill={fillColor} role="img" />
        </div>
      </a>
      <div fill="#00ff00" className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function CampaignHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">

        <h1 className="hero__title">
          It's Low Code February!
        </h1>
        <p>
          Join us for a month-long celebration of low code development - from understanding Power Platform Fundamentals, to exploring Fusion Teams and Cloud Integrations for scalable, serverless apps. Bookmark this page, then join us <b>Jan 31, 2022</b> as we kickstart  the Low Code journey.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/blog">
            Explore #30DaysOfLowCode
          </Link>
        </div>
      </div>
    </header>
  );
}

function FeaturesSection() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {CampaignFeatures.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}


export default function() {
  return (
    <Layout
      title={`Welcome to #LowCode February`}
      description="Join us for a month-long celebration ofLow Code & Fusion Development with #30DaysOfLowCode />"> 
      <CampaignHeader/>
      <main>
        <FeaturesSection/>
      </main>
    </Layout>
    
  );
}
