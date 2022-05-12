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
          <div class={styles.liste}>
            <div class="container">
              <div class="row">
                <div class="col col--2">
                  <div class="col-demo item shadow--tl">Dr Salim KANOUN</div>
                </div>
                <div class="col col--2">
                  <div class="col-demo item shadow--tl">Dr Pierre PASCAL</div>
                </div>
                <div class="col col--2">
                  <div class="col-demo item shadow--tl">Dr Gérard VICTOR</div>
                </div>
                <div class="col col--2">
                  <div class="col-demo item shadow--tl">Dr Alina BERRIOLO</div>
                </div>
                <div class="col col--2">
                  <div class="col-demo item shadow--tl">Dr Olivier MOREL</div>
                </div>
                <div class="col col--2">
                  <div class="col-demo item shadow--tl">Dr Ilan TAL</div>
                </div>
              </div>
            </div>
          </div>

          <h1>Students</h1>
          <div class={styles.liste}>
            <div class="container">
              <div class="row">
                <div class="col col--2">
                  <div class="col-demo item shadow--tl">Titouan QUEMA</div>
                </div>
                <div class="col col--2">
                  <div class="col-demo item shadow--tl">Mathis MOHAND</div>
                </div>
                <div class="col col--2">
                  <div class="col-demo item shadow--tl">Ping XIE</div>
                </div>
                <div class="col col--2">
                  <div class="col-demo item shadow--tl">Esteban BAICHO</div>
                </div>
                <div class="col col--2">
                  <div class="col-demo item shadow--tl">Shijie TIAN</div>
                </div>
                <div class="col col--2">
                  <div class="col-demo item shadow--tl">Gaël BELLANGER</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
