import React from 'react'

const Name = ({ person }) => {
    return (
        <div>
            {person.name}  {person.number}
        </div>
    )
}

export default Name