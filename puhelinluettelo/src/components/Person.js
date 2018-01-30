import React from 'react'
import Poista from './Poista'

const Person = ({ person, handleClick }) => {
    return (
        <tr>
            <td>{person.name}</td><td>{person.number}</td><td><Poista handleClick={handleClick} id={person.id} /></td>
        </tr>
    )
}

export default Person