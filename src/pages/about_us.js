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
      description="pages about us">
      <HomepageHeader/>
      <main>
      <div className={styles.text_para_pos}>
        <p >These application have been developed 
            by many doctors with the help of students from the IUT of Computer Science 
            in Toulouse</p>
    
          <h1>Doctors</h1>
          
          <ul class={styles.liste}>
              <li class="item shadow--tl">Dr Salim KANOUN</li>
              <li class="item shadow--tl">Dr Pierre PASCAL</li>
              <li class="item shadow--tl">Dr Gérard VICTOR</li>
              <li class="item shadow--tl">Dr Alina BERRIOLO</li>
              <li class="item shadow--tl">Dr Olivier MOREL</li>
              <li class="item shadow--tl">Dr Ilan TAL</li>
          </ul>

          <h1>Students</h1>

          <ul class={styles.liste}>
              <li class="item shadow--tl">Titouan QUEMA</li>
              <li class="item shadow--tl">Mathis MOHAND</li>
              <li class="item shadow--tl">Ping XIE</li>
              <li class="item shadow--tl">Esteban BAICHO</li>
              <li class="item shadow--tl">Ruban GRES</li>
              <li class="item shadow--tl">Shijie TIAN</li>
              <li class="item shadow--tl">Gaël BELLANGER</li>
          </ul>
        </div>
      </main>
    </Layout>
  );
}
