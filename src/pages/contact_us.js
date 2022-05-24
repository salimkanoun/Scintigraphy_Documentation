
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './pages.module.css';

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function  ContactUs()  {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_alvn4ca', 'template_9fjej9l', form.current, 'ELveCkDbUFCZS3X-9')
      .then((result) => {
          console.log(result.text); 
          alert("Your message have been sent successfully");
      }, (error) => {
          console.log(error.text);
          alert(error.text);
      });
     
  };

  return (
    <form style={{
      alignItems: "center",
      paddingLeft : "10%",
      paddingRight : "10%",
    }} ref={form} onSubmit={sendEmail}>
  
      <label style={{fontFamily: "Lucida Grande, sans-serif",}}>Your email : </label>
      <input style={{
 
    boxSizing: "border-box",
    border: "2px solid #ccc",
    borderRadius: "4px",
    backgroundColor: "#f8f8f8",
  
    resize: "none",
  }}type="email" name="user_email" />
      <br/> <br/>
      <label style={{fontFamily: "Lucida Grande, sans-serif",}}>Message : </label>
      <textarea name="message" />
      <br/> <br/>
      <input className={styles.styled} type="submit" value="Send" />
      <br/>
      <p></p>
    </form>
  );
};
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header>
      <div>
        <h1 className={styles.grandTitre}>Contact Us</h1>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home ${siteConfig.title}`}
      description="Pages about contacting us">
      <HomepageHeader />
      <main>
        <div className={styles.text_para_pos}>
          <p style={{fontFamily: "Lucida Grande, sans-serif",}}>Got questions?
Feel free to contact us!</p>
          <p style={{fontFamily: "Lucida Grande, sans-serif",}}>We'll reply you as soon as possible. </p>
        </div>
      <ContactUs/>
      </main>
    </Layout>
  );
}


   