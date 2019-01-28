import React from 'react';
import { Row } from '../layout';
import Button from '../app/Button';
import PropTypes from 'prop-types';

export class PopulationForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      population: 0
    };

    this.save.bind(this);
  }

  componentDidMount() {
    //this.props.loadData();
  }

  save() {
    this.props.onSave(this.state.population);
  }

  changePopulation(e) {
    this.setState({population: e.value});
  }

  render() {
    const { countries, onSave } = this.props;

    return (
      <form>
        <Row>
          <label>Select country</label>
          <select>
            {countries && countries.map(country =>
                             (
                               <option key={country.code}>{country.name}</option>
                             ))}
          </select>
        </Row>
        <Row>
          <label>Enter population</label>
          <input placeholder="0" onChange={this.changePopulation}/>
        </Row>
        <Row>
          <Button label="Save" onClick={onSave}/>
        </Row>
      </form>
    );
  }
}

PopulationForm.propTypes = {
  onSave: PropTypes.func,
  countries: PropTypes.array,
  loadData: PropTypes.func
};

