import { genericCreator } from './action-creators';
import { FETCH_COUNTRIES, FETCH_COUNTRIES_FAILURE, FETCH_COUNTRIES_SUCCESS } from './actions';
import loadCountries from './countries-thunk';
import * as countryApi from '../api/country';

describe('Countries thunk', () => {

  beforeAll(() => {

  });

  it('should despatch fetch action', () => {
    const mockDispatch = jest.fn();
    const countriesThunk = loadCountries();

    countriesThunk(mockDispatch);
    expect(mockDispatch.called);
    expect(mockDispatch).toHaveBeenCalledWith(genericCreator(FETCH_COUNTRIES));
  });

  it('should have correct response on success', async() => {
    countryApi.default = jest.fn(() => Promise.resolve([{ name: 'United Kingdom', code: 'UK' }]));
    const mockDispatch = jest.fn();
    const countriesThunk = loadCountries();

    await countriesThunk(mockDispatch);
    expect(mockDispatch.mock.calls.length).toBe(2);
    expect(mockDispatch.mock.calls[1][0])
    .toEqual(genericCreator(FETCH_COUNTRIES_SUCCESS, [{ name: 'United Kingdom', code: 'UK' }]));
  });

  it('should send failure message when failure', async() => {
    countryApi.default = jest.fn(() => Promise.reject());
    jest.mock('../api/country', () => () => Promise.reject());
    const mockDispatch = jest.fn();
    const countriesThunk = loadCountries();

    await countriesThunk(mockDispatch);
    expect(mockDispatch.mock.calls.length).toBe(2);
    expect(mockDispatch.mock.calls[1][0]).toEqual(genericCreator(FETCH_COUNTRIES_FAILURE, 'Unable to get countries'));
  });
});
