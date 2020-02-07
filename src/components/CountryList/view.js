import React, { useContext } from "react";

import { CountryContext, addCountry } from "../../context/countryContext";
import { getCountryByName } from "../../Services/countriesApi";

import CountryCard from "../CountryCard";
import FetchButton from "../FetchButton";

import "./styles.scss";

function CountryList() {
  const [state, dispatch] = useContext(CountryContext);
  const { countryList } = state;



  function handleFetchCountry(name) {
    async function fetchCountry() {
      const country = await getCountryByName(name);
      dispatch(addCountry(country));
    }

    const hasCountry = countryList.find(({ name: ctName }) => ctName === name);
    if (!hasCountry) {
      fetchCountry();
    }
  }

  return (
    <>
      <FetchButton
        initialCounter={countryList.length}
        onFetch={handleFetchCountry}
      />
      <ul className="CountryList__main-list">
        {countryList.map(country => (
          <CountryCard key={country.name} {...country} />
        ))}
      </ul>
    </>
  );
}

export default CountryList;
