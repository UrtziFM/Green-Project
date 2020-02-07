import PropTypes from 'prop-types';

export const countryPropTypes = PropTypes.shape({
  name: PropTypes.string,
  capital: PropTypes.string,
  population: PropTypes.number,
  types: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.string,
});

export const arrayOfCountryPropTypes = PropTypes.arrayOf(countryPropTypes);
