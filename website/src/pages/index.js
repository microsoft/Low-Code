import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

// Import image
import Image from '@theme/IdealImage';
import bannerImg from './../../static/img/fusion-dev.png';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          Low Code Development & Fusion Teams!
        </h1>
        <p className="hero__subtitle">{"From Power Platform To Cloud Integrations and Developer Tools!"}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/lowcode-february">
            Explore #LowCodeFebruary 🔋
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageHero() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Link to="https://learn.microsoft.com/power-platform/developer/fusion-development?WT.mc_id=javascript-82212-ninarasi">
          <Image img={bannerImg} className={styles.featureImg} />
        </Link>
      </div>
    </header>
  );
}

// Low Code Dev Home Page
export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.customFields.description}`} >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
      <HomepageHero />
    </Layout>
  );
}