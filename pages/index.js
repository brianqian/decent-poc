import React from 'react';
import Head from 'next/head';
import Hero from '../components/Hero';

const Home = () => (
  <div>
    <Head>
      <title>Decent</title>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </Head>

    <Hero />
  </div>
);

export default Home;