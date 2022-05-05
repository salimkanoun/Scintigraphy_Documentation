import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './pages.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header>
      <div>
        <h1 className={styles.grandTitre}>Our services</h1>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home ${siteConfig.title}`}
      description="pages about our services">
      <HomepageHeader />
      <main>
        <div className={styles.text_our_services}>
          <div className={styles.text_right}>
            <div class="item shadow--tl">
              <h1>Easy to install</h1>
              <p>Quick and easy to install in just a few clicks on your PC...</p>
            </div>
          </div>
          <div className={styles.text_left}>
            <div class="item shadow--tl">
              <h1>Useful everyday applications</h1>
              <p>Many applications available...</p>
            </div>
          </div>
          <div className={styles.text_right}>
            <div class="item shadow--tl">
              <h1>Original tools</h1>
              <p>Some tools are not available on the imaging consoles...</p>
            </div>
          </div>
          <div className={styles.text_left}>
            <div class="item shadow--tl">
              <h1>Updated applications according to the latest guidelines</h1>
              <p>
                Tools developed and updated according to the latest recommendations for each type of imagery...
              </p>
            </div>
          </div>
          <div className={styles.text_right}>
            <div class="item shadow--tl">
              <h1>Available in Open source!</h1>
              <p>It's free!</p>
            </div>
          </div>
          <div className={styles.text_left}>
            <div class="item shadow--tl">
              <h1>Possible evolutions and new tools to be developed!</h1>
              <p>Don't hesitate to come to us for ideas !</p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
