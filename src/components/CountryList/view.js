import React, { useContext } from "react";

import { CountryContext, addCountry } from "../../context/countryContext";
import { getCountryById } from "../../Services/countriesApi";

import CountryCard from "../CountryCard";
import FetchButton from "../FetchButton";

import "./styles.scss";

function CountryList() {
  const [state, dispatch] = useContext(CountryContext);
  const { countryList } = state;



  function handleFetchCountry(id) {
    async function fetchCountry() {
      const country = await getCountryById(id);
      dispatch(addCountry(country));
    }

    const hasCountry = countryList.find(({ id: ctId }) => ctId === id);
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
          <CountryCard key={country.id} {...country} />
        ))}
      </ul>
    </>
  );
}

export default CountryList;
