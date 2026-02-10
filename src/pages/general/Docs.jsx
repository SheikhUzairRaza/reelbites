import React from "react";
import { Link } from 'react-router-dom';

const Docs = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Documentation</h1>
      <p>Welcome! Here you can read how to use the application routes.</p>

      <ul>
  <li><Link to="/register">/register</Link> → Choose register as normal user or food partner</li>

  <li><Link to="/user/register">/user/register</Link> → User signup</li>

  <li><Link to="/user/login">/user/login</Link> → User login</li>

  <li><Link to="/food-partner/register">/food-partner/register</Link> → Food partner signup</li>

  <li><Link to="/food-partner/login">/food-partner/login</Link> → Food partner login</li>
</ul>

    </div>
  );
};

export default Docs;
