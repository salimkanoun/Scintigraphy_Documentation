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
  },
  {/*we&apos;ll*/
    title: 'Useful everyday applications',
    description: (
      <>
        Many applications available...
      </>
    ),
  },
  {
    title: 'Original tools',
    description: (
      <>
        Some tools are not available on the imaging consoles...
      </>
    ),
  },
  {
    title: 'Updated applications according to the latest guidelines',
    description: (
      <>
        Tools developed and updated according to the latest recommendations for each type of imagery...
      </>
    ),
  },
  {
    title: 'Available in Open source!',
    description: (
      <>
        It's free!
      </>
    ),
  },
  {
    title: 'Possible evolutions and new tools to be developed!',
    description: (
      <>
        Don't hesitate to come to us for ideas !
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
