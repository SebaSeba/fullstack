import React from 'react'

const Poista = ({ id, handleClick }) => {
    return (
        <button onClick={handleClick(id)}>poista</button>
    )
}

export default Poista