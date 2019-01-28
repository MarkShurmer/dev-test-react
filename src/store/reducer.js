import {
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAILURE,
  SAVE_POPULATION_SUCCESS,
  SAVE_POPULATION,
} from '../redux/actions';

export const getInitialState = () => ({
  // initial state...
});

 const replacePopulation = (countries, popChange) => {
   const countriesCopy = [...countries];
   const foundItem = countriesCopy.find(c => c.code === popChange.country_code);
   console.log('**** ', foundItem)
   if(foundItem) {
     foundItem.population = popChange.population;
   }

   return countriesCopy;
 };

export default (state, action) => {

  switch(action.type) {
    case FETCH_COUNTRIES_SUCCESS:
      return { countries: action.payload };
    case FETCH_COUNTRIES_FAILURE:
      return { error: action.payload };

    case SAVE_POPULATION:
      return { countries: replacePopulation(state.countries, action.payload) };

    default:
      return state;
  }
};
