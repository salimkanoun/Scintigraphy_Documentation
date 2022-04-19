import React from 'react';
import Layout from '@theme/Layout';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import clsx from 'clsx';

import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header >
      <div className="container">
        <h1 className={styles.appli}>About us</h1>

        
          
        
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
      <div className={styles.aboutUsText}>
      <p >These apllications have been developed 
          by many doctors with the help of students from the IUT of Computer Science 
          in Toulouse</p>
   
          <h1 style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '13vh',
          fontSize: '30px',
        }}>Doctors ...</h1>
            <p >Dr Salim KANOUN</p>
            <p >
            Dr Pierre PASCAL</p>
            <p >
            Dr Gérard VICTOR</p>
            <p >
            Dr Alina BERRIOLO</p>
            <p >
            Dr Olivier MOREL</p>
            <p >
            Dr Ilan TAL</p>
            
            <h1 style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '13vh',
          fontSize: '30px',
        }}>Students ...</h1>
            <p >Titouan QUEMA</p>
            <p >
            Mathis MOHAND</p>
            <p >
            Ping XIE</p>
            <p >
            Esteban BAICHO</p>
            <p >
            Ruban GRES</p>
            <p >
            Diego ROMERO</p>
            <p >
            Shijie TIAN</p>
            <p >
            Gael BELLANGER</p>

                </div>
       
      </main>
    </Layout>
  );
}
