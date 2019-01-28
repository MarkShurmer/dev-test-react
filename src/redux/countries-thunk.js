import { genericCreator } from './action-creators';
import { FETCH_COUNTRIES, FETCH_COUNTRIES_FAILURE, FETCH_COUNTRIES_SUCCESS } from './actions';
import countryApi from '../api/country';

const loadCountries = () => {
  return (dispatch) => {
    dispatch(genericCreator(FETCH_COUNTRIES));

    return countryApi()
    .then(resp => {
      return dispatch(genericCreator(FETCH_COUNTRIES_SUCCESS, resp));
    })
    .catch(() => {
      return dispatch(genericCreator(FETCH_COUNTRIES_FAILURE, 'Unable to get countries'));
    });
  };
};

export default loadCountries;
