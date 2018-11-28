import React from 'react';
import Head from 'next/head';

import User from './../../components/User';

const indexPage = () => (
  <div>
    <Head>
      <title>About Page</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <h1>The About Page</h1>
    <User name="John" age={26} />
  </div>
);

export default indexPage;