import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [],
      filter: ''
    }
  }

  handleFilterChange(event) {
    this.setState({
      filter: event.target.value
    })
  }

  componentWillMount() {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        this.setState({
          countries: response.data
        })
      })
  }

  render() {
    return (
      <div>
        <Find filter={this.state.filter} handleFilterChange={this.handleFilterChange.bind(this)} />
        <Countries countries={this.state.countries} filter={this.state.filter} />
      </div>
    )
  }
}

const Find = ({ filter, handleFilterChange }) => {
  return (
    <div>
      Find countries: <input value={filter} onChange={handleFilterChange} />
    </div>
  )
}

const Countries = ({ countries, filter }) => {

  if (countries.length > 0) {

    let filteredCountries = countries
    if (filter !== '') {
      filteredCountries = filteredCountries.filter(country => country.name.toUpperCase().includes(filter.toUpperCase()))
    }

    if (filteredCountries.length > 10) {
      return (
        <div>
          <p>too many matches, specify another filter</p>
        </div>
      )
    } else if (filteredCountries.length <= 10 && filteredCountries.length > 1) {
      return (
        <div>
          {filteredCountries.map(country => <Country key={country.name} country={country} />)}
        </div>
      )
    } else if (filteredCountries.length === 1) {
      return (
        <div>
          <CountryDetails country={filteredCountries[0]} />
        </div>
      )
    } else {
      return (
        <div>
        </div>
      )
    }
  } else {
    return (
      <div>
      </div>
    )
  }
}

const CountryDetails = ({ country }) => {
  console.log(country.flag)
  return (
    <div>
      <h2>{country.name}</h2>
      {country.capital}<br />
      <br />
      {country.population}<br />
      <br />
      <img src={country.flag} alt="Country flag" />
    </div>
  )
}

const Country = ({ country }) => {
  return (
    <div>
      { country.name }
      </div >
      )
}

export default App;
