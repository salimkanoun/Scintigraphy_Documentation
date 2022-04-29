import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './pages.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header>
      <div>
        <h1 className={styles.grandTitre}>About us</h1>
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
      <HomepageHeader/>
      <main>
      <div class="container" className={styles.text_para_pos}>
        <p >These application have been developed 
            by many doctors with the help of students from the IUT of Computer Science 
            in Toulouse</p>
    
          <h1>Doctors</h1>
          
          <ul class={styles.liste}>
              <li>Dr Salim KANOUN</li>
              <li>Dr Pierre PASCAL</li>
              <li>Dr Gérard VICTOR</li>
              <li>Dr Alina BERRIOLO</li>
              <li>Dr Olivier MOREL</li>
              <li>Dr Ilan TAL</li>
          </ul>

          <h1>Students</h1>

          <ul class={styles.liste}>
              <li>Titouan QUEMA</li>
              <li>Mathis MOHAND</li>
              <li>Ping XIE</li>
              <li>Esteban BAICHO</li>
              <li>Ruban GRES</li>
              <li>Shijie TIAN</li>
              <li>Gaël BELLANGER</li>
          </ul>
        </div>
      </main>
    </Layout>
  );
}
