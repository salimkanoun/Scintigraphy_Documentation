import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to install',
    description: (
      <>
        Quick and easy to install in just a few clicks on your PC...
      </>
    ),
    lien: 'docs/Preparation/Download',
    img: '../../static/img/appareil.jpg',
  },
  {/*we&apos;ll*/
    title: 'Useful everyday applications',
    description: (
      <>
        Many applications available...
      </>
    ),
    lien: 'our_services',
    img: '../../static/img/appareil.jpg',
  },
  {
    title: 'Original tools',
    description: (
      <>
        Some tools are not available on the imaging consoles...
      </>
    ),
    lien: 'our_services',
    img: '../../static/img/appareil.jpg',
  },
  {
    title: 'Updated applications according to the latest guidelines',
    description: (
      <>
        Tools developed and updated according to the latest recommendations for each type of imagery...
      </>
    ),
    lien: 'our_services',
    img: '../../static/img/appareil.jpg',
  },
  {
    title: 'Available in Open source!',
    description: (
      <>
        It's free!
      </>
    ),
    lien: 'our_services',
    img: '../../static/img/appareil.jpg',
  },
  {
    title: 'Possible evolutions and new tools to be developed!',
    description: (
      <>
        Don't hesitate to come to us for ideas !
      </>
    ),
    lien: 'our_services',
    img: '../../static/img/appareil.jpg',
  },
];

function Feature({title, description,lien,img}) {
  return (
    <div className={clsx('col col--4')}>
     <div className={styles.flipBox}>
      <div className={styles.flipBoxInner}>
      <div className={styles.flipBoxFront}>
        <img src="appareil.jpg"/>
      <h2>{title}</h2>
    </div>
       <div className={styles.flipBoxBack}>
        <div class="card">
          <div class="card__header">
            <h3>{title}</h3>
          </div>
          <div class="card__body">
            <p>{description}</p>
          </div>
          <div class="card__footer">
           <form>
              <button class="button button--secondary button--block" type="submit" formaction={lien}>Learn more</button>
            </form>
          </div>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="row w-95 p-3">
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>

        </section>
  );
}
