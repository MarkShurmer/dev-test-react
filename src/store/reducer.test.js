import reducer from './reducer';
import { genericCreator } from '../redux/action-creators';
import {
  DELETE_COUNTRY, FETCH_COUNTRIES_FAILURE, FETCH_COUNTRIES_SUCCESS, SAVE_POPULATION,
} from '../redux/actions';

describe('Reducer', () => {
  it('should return state as is when we pass garbage', () => {
    const result = reducer({ name: 'hello' }, { type: 'Eden Hazard' });
    expect(result.hasOwnProperty('name'));
    expect(result.name).toBe('hello');
  });

  it('should give countries on success', () => {
    const result = reducer({}, genericCreator(FETCH_COUNTRIES_SUCCESS, [{ name: 'Germany', code: 'de' }]));

    expect(result.countries).toBeDefined();
    expect(result.countries.length).toBe(1);
    expect(result.countries[0].name).toBe('Germany');
  });

  it('should give error on failure', () => {
    const result = reducer({}, genericCreator(FETCH_COUNTRIES_FAILURE, 'Unable to access server'));

    expect(result.error).toBeDefined();
    expect(result.error).toBe('Unable to access server');
  });

  it('shouldnt cause problem when no countries', () => {
    const result = reducer({ countries: [] }, genericCreator(SAVE_POPULATION, { country_code: 'be', pop: 1000 }));

    expect(result).toBeDefined();
    expect(result).toEqual({ countries: [] });
  });

  it('should save population into matching country', () => {
    const result = reducer({ countries: [{ code: 'fr', Name: 'France' }, { code: 'it', name: 'Italy' }] },
      genericCreator(SAVE_POPULATION, { country_code: 'fr', population: 1000 }));

    expect(result).toBeDefined();
    expect(result)
      .toEqual({ countries: [{ code: 'fr', Name: 'France', population: 1000 }, { code: 'it', name: 'Italy' }] });
  });

  it('shouldnt save population into non matching country', () => {
    const result = reducer({ countries: [{ code: 'fr', Name: 'France' }, { code: 'it', name: 'Italy' }] },
      genericCreator(SAVE_POPULATION, { country_code: 'uk', population: 10000 }));

    expect(result).toBeDefined();
    expect(result)
      .toEqual({ countries: [{ code: 'fr', Name: 'France' }, { code: 'it', name: 'Italy' }] });
  });

  it('shouldnt delete country in empty array', () => {
    const result = reducer({ countries: [] },
      genericCreator(DELETE_COUNTRY, { country_code: 'uk' }));

    expect(result).toBeDefined();
    expect(result).toEqual({ countries: [] });
  });

  it('should delete country in array', () => {
    const result = reducer({ countries: [{ code: 'fr', Name: 'France' }, { code: 'it', name: 'Italy' }] },
      genericCreator(DELETE_COUNTRY, 'fr'));

    expect(result).toBeDefined();
    expect(result).toEqual({ countries: [{ code: 'it', name: 'Italy' }] });
  });

  it('shouldnt delete country not in array', () => {
    const result = reducer({ countries: [{ code: 'fr', Name: 'France' }, { code: 'it', name: 'Italy' }] },
      genericCreator(DELETE_COUNTRY, 'es'));

    expect(result).toBeDefined();
    expect(result).toEqual({ countries: [{ code: 'fr', Name: 'France' }, { code: 'it', name: 'Italy' }] });
  });
});
