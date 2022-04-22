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
];
const FeatureList1 = [
  {/*we&apos;ll*/
    title: 'Useful everyday applications',
    description: (
      <>
        Many applications available...
      </>
    ),
    lien: 'docs/Preparation/Download',
  },
];
const FeatureList2 = [
  {
    title: 'Original tools',
    description: (
      <>
        Some tools are not available on the imaging consoles...
      </>
    ),
    lien: 'docs/Preparation/Download',
  },
];
const FeatureList3 = [
  {
    title: 'Updated applications according to the latest guidelines',
    description: (
      <>
        Tools developed and updated according to the latest recommendations for each type of imagery...
      </>
    ),
    lien: 'docs/Preparation/Download',
  },
];
const FeatureList4 = [
  {
    title: 'Available in Open source!',
    description: (
      <>
        It's free!
      </>
    ),
    lien: 'docs/Preparation/Download',
  },
];
const FeatureList5 = [
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

function Feature({Svg, title, description,lien}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md text--primary">
        <div className={styles.color}>
          <h3>{title}</h3>
          <p>{description}</p>
          
          <a href="http://localhost:3000/docs/Preparation/Download">+ Learn more</a>.
        </div>
      </div>
    </div>
  );
}
function Feature1({Svg, title, description,lien}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md text--primary">
        <div className={styles.color}>
          <h3>{title}</h3>
          <p>{description}</p>
          
          <a href="http://localhost:3000/docs/intro">+ Learn more</a>.
        </div>
      </div>
    </div>
  );
}
function Feature2({Svg, title, description,lien}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md text--primary">
        <div className={styles.color}>
          <h3>{title}</h3>
          <p>{description}</p>
          
          <a href="http://localhost:3000/our_services">+ Learn more</a>.
        </div>
      </div>
    </div>
  );
}
function Feature3({Svg, title, description,lien}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md text--primary">
        <div className={styles.color}>
          <h3>{title}</h3>
          <p>{description}</p>
          
          <a href="http://localhost:3000/docs/Preparation/Download">+ Learn more</a>.
        </div>
      </div>
    </div>
  );
}
function Feature4({Svg, title, description,lien}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md text--primary">
        <div className={styles.color}>
          <h3>{title}</h3>
          <p>{description}</p>
          
          <a href="https://github.com/facebook/docusaurus">+ Learn more</a>.
        </div>
      </div>
    </div>
  );
}
function Feature5({Svg, title, description,lien}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md text--primary">
        <div className={styles.color}>
          <h3>{title}</h3>
          <p>{description}</p>
          
          <a href="http://localhost:3000/contact_us">+ Learn more</a>.
        </div>
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
            {FeatureList1.map((props, idx) => (
            <Feature1 key={idx} {...props} />
          ))}
            {FeatureList2.map((props, idx) => (
            <Feature2 key={idx} {...props} />
          ))}
            {FeatureList3.map((props, idx) => (
            <Feature3 key={idx} {...props} />
          ))}
            {FeatureList4.map((props, idx) => (
            <Feature4 key={idx} {...props} />
          ))}
            {FeatureList5.map((props, idx) => (
            <Feature5 key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
