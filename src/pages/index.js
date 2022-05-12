import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import DocusaurusSvg from '/static/img/appareil.jpg';
import Icone from '/static/img/iconeNucle.png';
import { render } from "react-dom";
import { Parallax, Background } from "react-parallax";
import {BrowserRouter} from 'react-router-dom';
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header style={{ 
      "height":"1300px ", 
      "position":"relative",
      "left":"0",
      "top":"0",
      "right":"0",
      }} id="rot" className={clsx('hero hero--primary', styles.heroBanner)}>

   
     
     
  
     </header>
      
  );
  
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
 
      <HomepageHeader />
      
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
    </Layout>
  );
}
const App = () => {
  const {siteConfig} = useDocusaurusContext();
  return(
    <BrowserRouter>
    <Parallax style={{
      "width":"100%", 
      "position":"absolute",
      "left":"0",
      "top":"0",
      "right":"0",
      "max-height": "95%",
   
     "overflow": "hidden",
      }} bgImage={DocusaurusSvg } strength={500}>
    
    <div className={styles.perspective}>
        <div className={styles.container} id="main1">
       
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
      </div>
    
    </Parallax>
    </BrowserRouter>);
    };
    
/*var jQueryScript = document.createElement('script');
jQueryScript.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js');
document.head.appendChild(jQueryScript);
/*setTimeout(function() {*/
window.onload = function(){

  render(<App />, document.getElementById("rot"));
 var parentDOM= document.getElementById('__docusaurus');
  /*var para= parentDOM.getElementsByClassName('react-parallax')[0];
  para.style.cssText+='width:100%;position:absolute;left:0;top:0;right:0;'
  /*document.onreadystatechange = function() {*/
 
 /* document.getElementById('__docusaurus').style.perspective = "1px";
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
/*mainWrapper.style.cssText+='  position: relative;height: 100vh;transform-style: preserve-3d;'
/*document.footer.style.cssText+='    position: absolute;top: 150%;left: 0;right: 0;'
*/
/*$("footer").css({ 'position': 'absolute', 'top':'2750px' , 'left': '0','right': '0'})
console.log($("footer"));
/*
console.log($("div.main-wrapper"))*/
//  read styles of the body element

//console.log(document.body.style.height );
//console.log(  document.body.style.overflowY );
//console.log(  document.body.style.overflowX);
for(let i = 0; i<6;i++){
var col= parentDOM.getElementsByClassName('col col--4')[i];
col.style.cssText+='margin-top:100px;';
console.log(col);}

/*}, 100);*/
};