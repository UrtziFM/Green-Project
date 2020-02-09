import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";

import CountryCard from "../CountryCard";

import { getCountryByName as fetchCountryByName } from "../../Services/countriesApi";
import {
  CountryContext,
  addCountry,
  getCountryByName
} from "../../context/countryContext";

function CountryProfile({ match }) {
  const [state, dispatch] = useContext(CountryContext);

  const { name } = match.params;
  const country = getCountryByName(state, name);

  useEffect(() => {
    async function fetchCountry() {
      const country = await fetchCountryByName(name);
      dispatch(addCountry(country));
    }

    if (!country) {
      fetchCountry();
    }
  }, [name, country, dispatch]);

  return country ? <CountryCard {...country} /> : <h3>Loading country...</h3>;
}

CountryProfile.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string
    })
  }).isRequired
};

export default CountryProfile;
