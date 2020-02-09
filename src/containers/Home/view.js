import React from "react";
import { Link } from 'react-router-dom';

import logo from '../../logo.svg';

function Home() {
  return (
    <>
      <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      </header>
      </div>
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
