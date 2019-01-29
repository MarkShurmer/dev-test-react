import React from 'react';
import PropTypes from 'prop-types';
import Button from '../app/Button';
import {
  StyledLabel, Container, ChildLhs, ChildRhs, StyledSelect, StyledError,
} from './styles';

export class PopulationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      population: props.population || 0,
      country_code: props.countries ? props.countries[0].code : '',
    };

    this.save = this.save.bind(this);
    this.changePopulation = this.changePopulation.bind(this);
    this.changeCountry = this.changeCountry.bind(this);
    this.delete = this.delete.bind(this);
  }

  save() {
    if (!this.props.error) {
      this.props.onSave(this.state);
    }
  }

  delete() {
    if (!this.props.error) {
      this.props.onDelete(this.state.country_code);
    }
  }

  changePopulation(e) {
    this.setState({ population: +e.target.value });
  }

  changeCountry(e) {
    const selectedCountry = this.props.countries.find(c => c.code === e.target.value);
    if (selectedCountry) {
      this.setState({ country_code: selectedCountry.code, population: selectedCountry.population || 0 });
    }
  }

  getCountryText(country) {
    if (country.hasOwnProperty('population') && country.population > 0) {
      return `${country.name} - ${country.population}`;
    }

    return country.name;
  }

  render() {
    const { countries, error } = this.props;

    return (
      <form>
        <Container>
          <ChildLhs>
            <StyledLabel>Select country</StyledLabel>
          </ChildLhs>
          <ChildRhs>
            <StyledSelect onChange={this.changeCountry}>
              {countries && countries.map(country => (
                <option
                  key={country.code}
                  value={country.code}
                >
                  {this.getCountryText(country)}
                </option>
              ))}
            </StyledSelect>
          </ChildRhs>
          <ChildLhs>
            <StyledLabel>Enter population</StyledLabel>
          </ChildLhs>
          <ChildRhs>
            <input placeholder="0" onChange={this.changePopulation} value={this.state.population} />
          </ChildRhs>
          <ChildLhs>
            <Button label="Save" onClick={this.save} />
            <Button label="Delete" onClick={this.delete} color="quaternary" />
          </ChildLhs>
          <ChildRhs />
          {error
            ? (
              <ChildLhs>
                <StyledError>{error}</StyledError>
              </ChildLhs>
            )
            : null}
        </Container>
      </form>
    );
  }
}

PopulationForm.propTypes = {
  onSave: PropTypes.func,
  onDelete: PropTypes.func,
  countries: PropTypes.array,
  loadData: PropTypes.func,
};
