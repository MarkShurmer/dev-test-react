import React from 'react';
import { Provider } from 'react-redux';
import Theme from '../theme';
import createStore from '../../store';
import Layout from '../layout';
import H1 from './H1';
import Population from '../population/population-container';
import loadCountries from '../../redux/countries-thunk';

// create the redux store
const store = createStore();

store.dispatch(loadCountries());

export default () => (
  <Provider store={store}>
    <Theme>
      <Layout>
        <H1>Countries</H1>
        <Population />
      </Layout>
    </Theme>
  </Provider>
);
