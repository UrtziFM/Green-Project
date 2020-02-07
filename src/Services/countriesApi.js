import axios from 'axios';

const baseUrl = 'https://restcountries.eu/rest/v2/name/';

const buildUrl = name => `${baseUrl}${name}?fullText=true/`;

function formatTypes(types) {
  return types.map(({ type }) => type.name);
}

function formatCountry(country) {
  const { name, capital, population, flag } = country;
  const { front_default } = flag;
  
  return {
    name,
    capital,
    population,
    types: formatTypes(types),
    image: front_default,
  }
}

export async function getCountryByName(name) {
  const url = buildUrl(name);

  const { data } = await axios.get(url);
  return formatCountry(data);
}
