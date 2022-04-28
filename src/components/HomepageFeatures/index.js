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
  },
  {/*we&apos;ll*/
    title: 'Useful everyday applications',
    description: (
      <>
        Many applications available...
      </>
    ),
    lien: 'docs/Preparation/Installation',
  },
  {
    title: 'Original tools',
    description: (
      <>
        Some tools are not available on the imaging consoles...
      </>
    ),
    lien: 'docs/Preparation/Download',
  },
  {
    title: 'Updated applications according to the latest guidelines',
    description: (
      <>
        Tools developed and updated according to the latest recommendations for each type of imagery...
      </>
    ),
    lien: 'docs/Preparation/Download',
  },
  {
    title: 'Available in Open source!',
    description: (
      <>
        It's free!
      </>
    ),
    lien: 'docs/Preparation/Download',
  },
  {
    title: 'Possible evolutions and new tools to be developed!',
    description: (
      <>
        Don't hesitate to come to us for ideas !
      </>
    ),
    lien: 'docs/Preparation/Download',
  },
];

function Feature({title, description,lien}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md text--primary">
        <div className={styles.color}>
          <h3>{title}</h3>
          <p>{description}</p>
          <div className={styles.lien}>
          <a class="badge badge-primary text-wrap" href={lien}>+ Learn more</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
    <div className={styles.container}>
        <div className="row w-95 p-3">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
