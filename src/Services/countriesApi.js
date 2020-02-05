import axios from 'axios';

const baseUrl = 'https://restcountries.eu/rest/v2/region/{region}';

const buildUrl = region => `${baseUrl}${region}/`;

function formatTypes(types) {
  return types.map(({ type }) => type.name);
}

function formatCountry(country) {
  const { id, name, types, sprites } = pokemon;
  const { front_default } = sprites;
  
  return {
    id,
    name,
    types: formatTypes(types),
    image: front_default,
  }
}

export async function getPokemonById(id) {
  const url = buildUrl(id);

  const { data } = await axios.get(url);
  return formatPokemon(data);
}
