import axios from 'axios';

const baseUrl = 'https://restcountries.eu/rest/v2/name/';

const buildUrl = id => `${baseUrl}${id}/`;


function formatCountry(country) {
  const { name, capital, population, flag } = country;

  
  return {
    name,
    capital,
    population,
    flag,
  }
}

export async function getCountryById(id) {
  const url = buildUrl(id);

  const { data } = await axios.get(url);
  return formatCountry(data);
}
