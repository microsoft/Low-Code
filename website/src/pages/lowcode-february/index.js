import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

import styles from './../index.module.css';

const CampaignFeatures = [
  {
    title: '#30DaysOfLowCode',
    Svg: require('@site/static/img/campaign/30Days.svg').default,
    fillColor: "#f25022",
    link: "/Low-Code/blog",
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
];

function Feature({Svg, title, description, link, fillColor}) {
  return (
    <div className={clsx('col col--6')}>
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
            Explore #30DaysOfLowCode 🔋
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
      title={`Welcome to #ServerlessSeptember`}
      description="Join us for a month-long celebration of Cloud Native technologies go from core concept to code with #30DaysOfServerless />"> 
      <CampaignHeader/>
      <main>
        <FeaturesSection/>
      </main>
    </Layout>
    
  );
}