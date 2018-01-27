import React from 'react';
import Name from './Name';

const PersonComponents = (props) => {
    let ps = props.persons
    if (props.filter !== '') {
        ps = ps.filter(person => person.name.toUpperCase().includes(props.filter.toUpperCase()))
    }
    return (
        ps.map(person => <li key={person.name}><Name person={person} /></li>)
    )
}

export default PersonComponents