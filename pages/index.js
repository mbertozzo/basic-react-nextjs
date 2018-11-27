import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

const indexPage = () => (
  <div>
    <h1>The Main Page</h1>
    <p>Go to <Link href="/about"><a>About Page</a></Link></p>
    <button onClick={() => Router.push('/about')}>Go to about</button>
  </div>
);

export default indexPage;