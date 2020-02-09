import React from "react";
import { Route, Switch, Link } from "react-router-dom";

import CountryList from "../../components/CountryList";
import CountryProfile from "../../components/CountryProfile";

import { CountryContextProvider } from "../../context/countryContext";

function Country({ match }) {
  return (
    <div className="Country">
      <h1>Welcome to Green Project</h1>
      <div>
        <Link to={`${match.path}/list`}>To Country list</Link>
      </div>
      <CountryContextProvider>
        <Switch>
          <Route path={`${match.path}/list`} exact component={CountryList} />
          <Route path={`${match.path}/:id`} exact component={CountryProfile} />
        </Switch>
      </CountryContextProvider>
    </div>
  );
}

export default Country;
