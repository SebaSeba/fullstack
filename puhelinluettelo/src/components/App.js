import React from 'react';
import PersonComponents from './PersonComponents';

export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas', number: '0500 000' },
        { name: 'Erkki Pertti', number: '234 5435' },
        { name: 'Arto Pena', number: '999 999' }
      ],
      newName: '',
      newNumber: '',
      filter: ''
    }
  }

  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value })
  }

  handleNameChange = (event) => {
    this.setState({ newName: event.target.value })
  }

  handleNumberChange = (event) => {
    this.setState({ newNumber: event.target.value })
  }

  addNameAndNumber = (event) => {
    event.preventDefault()

    const person = {
      name: this.state.newName,
      number: this.state.newNumber
    }

    if (this.state.persons.some(x => x.name === person.name)) {
      alert("The person is already included in the list!")
    } else {
      const persons = this.state.persons.concat(person)

      this.setState({
        persons,
        newName: '',
        newNumber: ''
      })
    }
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        Rajaa näytettäviä: <input value={this.state.filter} onChange={this.handleFilterChange} />
        <form onSubmit={this.addNameAndNumber}>
          <div>
            <div>
              nimi: <input value={this.state.newName} onChange={this.handleNameChange} />
            </div>
            <div>
              numero: <input value={this.state.newNumber} onChange={this.handleNumberChange} />
            </div>
            <div>
              <button type="submit">lisää</button>
            </div>
          </div>
        </form>
        <h2>Numerot</h2>
        <div>
          <ul>
            <PersonComponents persons={this.state.persons} filter={this.state.filter} />
          </ul>
        </div>
      </div>
    )
  }
}

export default App