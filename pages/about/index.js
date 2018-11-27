import React from 'react';

import User from './../../components/User';

const indexPage = () => (
  <div>
    <h1>The About Page</h1>
    <User name="John" age={26} />
  </div>
);

export default indexPage;