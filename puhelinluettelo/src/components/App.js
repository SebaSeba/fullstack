import React from 'react'
import PersonComponents from './PersonComponents';
import personService from '../services/PersonService'

export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      filter: ''
    }
  }

  componentWillMount() {
    personService
      .getAll()
      .then(persons => {
        this.setState({
          persons
        })
      })
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
      if (window.confirm(person.name + ' on jo luettelossa, korvataanko vanha numero uudella?')) {
        let p = this.state.persons.filter(x => x.name === person.name)[0]
        p.number = person.number
        personService.update(p).then(person => {
          let filtered = this.state.persons.filter(x => x.id !== person.id)
          this.setState({
            persons: filtered.concat(person),
            newName: '',
            newNumber: ''
          })
        })
      }
    } else {
      personService.create(person)
        .then(person => {
          this.setState({
            persons: this.state.persons.concat(person),
            newName: '',
            newNumber: ''
          })
        }
        )
    }
  }

  handleClick = (id) => {
    return () => {
      const name = this.state.persons.filter(person => person.id === id)[0].name
      if (window.confirm('Poistetaanko ' + name)) {
        personService.remove(id).then(
          this.setState({
            persons: this.state.persons.filter(person => person.id !== id)
          })
        )
      }
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
            <PersonComponents persons={this.state.persons} filter={this.state.filter} handleClick={this.handleClick} />
          </ul>
        </div>
      </div>
    )
  }
}

export default App