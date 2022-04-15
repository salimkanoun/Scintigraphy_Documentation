import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className={styles.appli}>{siteConfig.title}</h1>
        <p className={styles.tag}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="download">
            Download
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
      <div className={styles.avantFeature}>
          <h1 className={styles.avantFeatureTitre}>Our Services</h1>
            <p className={styles.avantFeatureText}>Need a Scintigraphy Applicaiton?</p>
            <p className={styles.avantFeatureText}>  We have developped several tools for image processing in Scintigraphy.</p>
      </div>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
