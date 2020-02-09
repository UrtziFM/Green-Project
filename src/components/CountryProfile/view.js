import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";

import CountryCard from "../CountryCard";

import { getCountryById as fetchCountryById } from "../../Services/countriesApi";
import {
  CountryContext,
  addCountry,
  getCountryById
} from "../../context/countryContext";

function CountryProfile({ match }) {
  const [state, dispatch] = useContext(CountryContext);

  const { id } = match.params;
  const country = getCountryById(state, id);

  useEffect(() => {
    async function fetchCountry() {
      const country = await fetchCountryById(id);
      dispatch(addCountry(country));
    }

    if (!country) {
      console.log(country);
      fetchCountry();
    }
  }, [id, country, dispatch]);

  return country ? <CountryCard {...country} /> : <h3>Loading country...</h3>;
}

CountryProfile.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  }).isRequired
};

export default CountryProfile;
