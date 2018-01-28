import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: []
    }
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
        <Find />
        <ul>
        <Countries countries={this.state.countries} />
        </ul>
      </div>
    )
  }
}

const Find = () => {
  return (
    <div>
      Find countries: <input />
    </div>
  )
}

const Countries = ({countries}) => {
  if (countries.length > 0) {
    console.log(countries)
    return (
      <div>
        countries.map(country => <li key={country.name}><Country country={country} /></li>)
      </div>
    )
  } else {
    return (
      <div>
      </div>
    )
  }
}

const Country = ({ country }) => {
  return (
    <div>
      {country.name}
    </div>
  )
}

export default App;
