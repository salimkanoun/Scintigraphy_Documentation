import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import DocusaurusSvg from '/static/img/appareil.jpg';
import Icone from '/static/img/iconeNucle.png';
import { render } from "react-dom";
import { Parallax, Background } from "react-parallax";
import {BrowserRouter} from 'react-router-dom';
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header style={{ 
      "height":"1100px ", 
      "position":"relative",
      "left":"0",
      "top":"0",
      "right":"0",
      }} id="rot" className={clsx('hero hero--primary', styles.heroBanner)}>

<BrowserRouter>
    <Parallax style={{
      "width":"100%", 
      "position":"absolute",
      "left":"0",
      "top":"0",
      "right":"0",
      "max-height": "95%",
   
     "overflow": "hidden",
      }} bgImage={DocusaurusSvg } strength={500}>
    
    <div className={styles.perspective}>
        <div className={styles.container} id="main1">
       
       <h1 className={styles.appli}>{siteConfig.title}</h1>
       <br></br>
       <p className={styles.tag}>{siteConfig.tagline}</p>
       <br></br>
        <div className={styles.buttons}>
       <Link
         className="button button--secondary button--lg"
         to="docs/Preparation/Download">
         Download
        </Link>
         </div>
        
      </div>
      </div>
    
    </Parallax>
    </BrowserRouter>
     
     
  
     </header>
      
  );
  
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home ${siteConfig.title}`}
      description="Home page">
      <HomepageHeader />
        <div className={styles.avantFeature}> 
          <img className={styles.icone} src={Icone} />
          <h1>Our Services</h1>
          <h2>Need a Scintigraphy Application?</h2>
          <p>We have developped several tools for image processing in Scintigraphy.</p>
        </div>
      <HomepageFeatures />
    </Layout>
  );
}
