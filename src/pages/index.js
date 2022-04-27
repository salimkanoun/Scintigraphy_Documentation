import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import DocusaurusSvg from '/static/img/appareil.jpg';
import Icone from '/static/img/iconeNucle.png';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
      <div className={styles.container}>
        <img className={styles.appareil} src={DocusaurusSvg} />
        <h1 className={styles.appli}>{siteConfig.title}</h1>
        <p className={styles.tag}>{siteConfig.tagline}</p>
        
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="docs/Preparation/Download">
            Download
          </Link>
        </div>
     <div className={styles.avantFeature}> <div className={styles.avantAppli2} ></div>
     <br></br>
      <img className={styles.icone} src={Icone} />
          <h1 className={styles.avantFeatureTitre}>Our Services</h1>
            <p1> Need a Scintigraphy Application?</p1>
            <p2>  We have developped several tools for image processing in Scintigraphy.</p2>
      </div>
      <HomepageFeatures />
    </div>
  
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
      <HomepageHeader />
      </main>
    </Layout>
  );
}