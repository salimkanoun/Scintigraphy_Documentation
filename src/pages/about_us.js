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
        <Tabs
          defaultValue="apple"
          values={[
            {label: 'Apple', value: 'apple'},
            {label: 'Orange', value: 'orange'},
            {label: 'Banana', value: 'banana'},
          ]}>
          <TabItem value="apple">Ceci est une pomme 🍎</TabItem>
          <TabItem value="orange">Ceci est une orange 🍊</TabItem>
          <TabItem value="banana">Ceci est une banane 🍌</TabItem>
        </Tabs>
      </div>
    </Layout>
  );
}