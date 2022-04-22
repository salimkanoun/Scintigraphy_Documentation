import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header >
      <div className="container">
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
    
            <h1 style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '13vh',
            fontSize: '30px',
          }}>Doctors</h1>
          <div class="row">
            <div class="col">
              <div class="col-demo">Dr Salim KANOUN</div>
            </div>
            <div class="col">
              <div class="col-demo">Dr Pierre PASCAL</div>
            </div>
            <div class="col">
              <div class="col-demo">Dr Gérard VICTOR</div>
            </div>
            <div class="col">
              <div class="col-demo">Dr Alina BERRIOLO</div>
            </div>
            <div class="col">
              <div class="col-demo">Dr Olivier MOREL</div>
            </div>
            <div class="col">
              <div class="col-demo">Dr Ilan TAL</div>
            </div>
          </div>
              <h1 style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '13vh',
            fontSize: '30px',
          }}>Students</h1>
          
            <p>Titouan QUEMA</p>
            <p>Mathis MOHAND</p>
            <p>Ping XIE</p>
            <p>Esteban BAICHO</p>
            <p>Ruban GRES</p>
            <p>Diego ROMERO</p>
            <p>Shijie TIAN</p>
            <p>Gaël BELLANGER</p>
        </div>
      </main>
    </Layout>
  );
}
