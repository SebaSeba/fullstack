import React from 'react'
import Person from './Person'

const PersonComponents = (props) => {
    let ps = props.persons
    if (props.filter !== '') {
        ps = ps.filter(person => person.name.toUpperCase().includes(props.filter.toUpperCase()))
    }
    return (
        <table>
            <tbody>
                {ps.map(person => <Person key={person.id} person={person} handleClick={props.handleClick} />)}
            </tbody>
        </table>
    )
}

export default PersonComponents