import { connect } from 'react-redux';
import { PopulationForm } from './population-form';
import { DELETE_COUNTRY, SAVE_POPULATION } from '../../redux/actions';
import { genericCreator } from '../../redux/action-creators';
import loadCountries from '../../redux/countries-thunk';
import getSortedCountries from '../../redux/selector';

function mapStateToProps(state) {
  return {
    error: state.error,
    countries: getSortedCountries(state.countries),
  };
}

function mapDispatchToProps(dispatcher) {
  return {
    onSave: popChange => dispatcher(genericCreator(SAVE_POPULATION, popChange)),
    onDelete: country => dispatcher(genericCreator(DELETE_COUNTRY, country)),
    loadData: () => dispatcher(loadCountries()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PopulationForm);
