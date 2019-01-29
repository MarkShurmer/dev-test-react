import {
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAILURE,
  SAVE_POPULATION, DELETE_COUNTRY,
} from '../redux/actions';

export const getInitialState = () => ({
});

const replacePopulation = (countries, popChange) => {
  const countriesCopy = [...countries];
  const foundItem = countriesCopy.find(c => c.code === popChange.country_code);

  if (foundItem) {
    foundItem.population = popChange.population;
  }

  return countriesCopy;
};

const removeCountry = (countries, countryCodeToRemove) => {
  const countriesCopy = [...countries];
  const foundIndex = countriesCopy.findIndex(c => c.code === countryCodeToRemove);

  if (foundIndex > -1) {
    countriesCopy.splice(foundIndex, 1);
  }

  return countriesCopy;
};

export default (state, action) => {
  switch (action.type) {
    case FETCH_COUNTRIES_SUCCESS:
      return { countries: action.payload };
    case FETCH_COUNTRIES_FAILURE:
      return { error: action.payload };

    case SAVE_POPULATION:
      return { countries: replacePopulation(state.countries, action.payload) };

    case DELETE_COUNTRY:
      return { countries: removeCountry(state.countries, action.payload) };

    default:
      return state;
  }
};
