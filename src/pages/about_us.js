import React from 'react';
import Layout from '@theme/Layout';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export default function Hello() {
  return (

    <Layout title="Hello" description="Hello React Page">
      
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
         Page About us
      </div>
    </Layout>
  );
}