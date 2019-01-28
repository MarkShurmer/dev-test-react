import { connect } from 'react-redux';
import { PopulationForm } from './population-form';
import { SAVE_POPULATION } from '../../redux/actions';
import { genericCreator } from '../../redux/action-creators';
import loadCountries from '../../redux/countries-thunk';

function mapStateToProps(state) {
  return {
    error: state.error,
    countries: state.countries,
  };
}

function mapDispatchToProps(dispatcher) {
  return {
    onSave: pop => dispatcher(genericCreator(SAVE_POPULATION, pop)),
    loadData: () => dispatcher(loadCountries()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PopulationForm);
