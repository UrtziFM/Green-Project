import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./containers/Home";
import Country from "./containers/Country";
// import PokemonProfile from "./containers/PokemonProfile";
import Test from "./containers/Test";


import './App.css';



function App() {
  return (
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
