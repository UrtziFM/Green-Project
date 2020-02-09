import React from "react";
import { Link } from 'react-router-dom';

import { countryPropTypes } from "../../constants/countryPropTypes";

import './styles.scss';

function CountryCard({ name, capital, population, flag }) {
  return (
    <li className="CountryCard__card">
      <Link to={`/country/${name}`}>
        <h3>{name}</h3>
        <h3>{capital}</h3>
        <h3>{population}</h3>
        <img src={flag} alt={name} />
      </Link>
    </li>
  );
}

CountryCard.propTypes = countryPropTypes.isRequired;

export default CountryCard;
