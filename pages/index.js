import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';

const indexPage = () => (
  <div>
    <Head>
      <title>Next.js Demo Project</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <h1>The Main Page</h1>
    <p>Go to <Link href="/about"><a>About Page</a></Link></p>
    <button onClick={() => Router.push('/about')}>Go to about</button>
    <img src="/static/image.jpg" alt="Beautiful image" />
    <style global jsx>{`
      img {
        display: block;
        margin: 50px auto;
        max-width: 50%;
      }
    `}</style>
  </div>
);

export default indexPage;