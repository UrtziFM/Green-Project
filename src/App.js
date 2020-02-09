import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./containers/Home";
import Country from "./containers/Country";
// import PokemonProfile from "./containers/PokemonProfile";
import Test from "./containers/Test";

// import logo from './logo.svg';
import './App.css';



function App() {
  return (
   // <div className="App">
   // <header className="App-header">
   //   <img src={logo} className="App-logo" alt="logo" />
   // </header>
   //</div>
    <Router>
    <Switch>
      <Route path="/country" component={Country} />
      <Route path="/test" component={Test} />
      <Route path="/" component={Home} />
    </Switch>
    </Router>

  );
}

export default App;
