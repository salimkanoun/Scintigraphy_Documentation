import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import DocusaurusSvg from '/static/img/appareil.jpg';
import Icone from '/static/img/iconeNucle.png';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    
  <div className={styles.perspective}>
      <div className={styles.container} id="main1">
       
            <div className={styles.imageTitre}></div>
         
            <h1 className={styles.appli}>{siteConfig.title}</h1>
            <br></br>
            <p className={styles.tag}>{siteConfig.tagline}</p>
            <br></br>
             <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="docs/Preparation/Download">
              Download
             </Link>
              </div>
          
      </div>
      <div className={styles.avantFeature}> 
      
        <div className={styles.avantAppli2} >
        </div>
        <br></br>
        
      <img className={styles.icone} src={Icone} />
          <h1 className={styles.avantFeatureTitre}>Our Services</h1>
            <h2> Need a Scintigraphy Application?</h2>
            <p>  We have developped several tools for image processing in Scintigraphy.</p>
      </div>
      <HomepageFeatures />
     
   </div>
     
      
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
 
      <HomepageHeader />
      
      
    </Layout>
  );
}
var jQueryScript = document.createElement('script');
jQueryScript.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js');
document.head.appendChild(jQueryScript);
/*setTimeout(function() {*/

document.onreadystatechange = function() {
  /*window.onload = function(){*/
 
  document.getElementById('__docusaurus').style.perspective = "1px";
  document.getElementById('__docusaurus').style.height= "100vh";
  document.getElementById('__docusaurus').style.overflowY = "auto";
  document.getElementById('__docusaurus').style.overflowX = "hidden";

  var parentDOM= document.getElementById('__docusaurus');
 var mainWrapper= parentDOM.getElementsByClassName('main-wrapper')[0];
 
 /*mainWrapper.appendChild( .under {
  text-decoration: underline;
})*/
//$("div.main-wrapper").removeClass("main-wrapper").addClass("styles.parallax__group");
/*$("div.main-wrapper").append("
.green-text {
color: #008000;
}")*/
mainWrapper.style.cssText+='  position: relative;height: 100vh;transform-style: preserve-3d;'
/*document.footer.style.cssText+='    position: absolute;top: 150%;left: 0;right: 0;'
*/
$("footer").css({ 'position': 'absolute', 'top':'2750px' , 'left': '0','right': '0'})
console.log($("footer"));
/*
console.log($("div.main-wrapper"))*/
//  read styles of the body element

//console.log(document.body.style.height );
//console.log(  document.body.style.overflowY );
//console.log(  document.body.style.overflowX);
};
/*}, 100);*/
