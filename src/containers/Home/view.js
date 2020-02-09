import React from "react";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <h1>Welcome to Green Project</h1>
      <h3>Fetch all countries you want</h3>
      <ul>
        <li>
          <Link to="/country">Country</Link>
        </li>
        <li>
          <Link to="/test">Test sandbox</Link>
        </li>
      </ul>
    </>
  );
}

export default Home;
