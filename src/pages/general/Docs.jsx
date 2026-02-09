import React from "react";

const Docs = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Documentation</h1>
      <p>Welcome! Here you can read how to use the application routes.</p>

      <ul>
        <li>/register → Choose register as normal user or food partner</li>
        <li>/user/register → User signup</li>
        <li>/food-partner/register → User signup</li>
        <li>/user/login for login as user</li>
        <li>/food-partner/register → Food partner signup</li>
        <li>/food-partner/login → Food partner login</li>
      </ul>
    </div>
  );
};

export default Docs;
