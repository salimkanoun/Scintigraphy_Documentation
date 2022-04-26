import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
/*import Link from '@docusaurus/Link';
import clsx from 'clsx';*/

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header >
       <div className={styles.avantAppli1} ></div>
     <div className={styles.avantAppli2} ></div>
     <br></br>
      <div className="container">
        <h1 className={styles.appli}>{siteConfig.title}</h1>
        <p className={styles.tag}>{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home ${siteConfig.title}`}
      description="Description will go into a meta tag in <head/>">
      <HomepageHeader />
      <main>
      <div className={styles.avantFeature}>
          <h1>Our Services</h1>
          <p>Need a Scintigraphy Application?</p>
          <p>We have developped several tools for image processing in Scintigraphy.</p>
      </div>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
