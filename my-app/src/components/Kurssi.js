import React from 'react'



const Kurssi = ({ kurssi }) => {
    return (
        <div>
            <Otsikko kurssi={kurssi.nimi} />
            <Sisalto osat={kurssi.osat} />
            <Yhteensa osat={kurssi.osat} />
        </div>
    )
}

const Yhteensa = ({ osat }) => {
    let result = () => osat.reduce((function (sum, osa) {
        return sum + osa.tehtavia
    }), 0)
    return (
        <div>
            <p>yhteensä {result()} tehtävää</p>
        </div>
    )
}

const Otsikko = (props) => {
    return (
        <div>
            <h1>{props.kurssi}</h1>
        </div>
    )
}

const Sisalto = ({osat}) => {
    const osaComponents = () => osat.map(osa => <Osa key={osa.id} osa={osa.nimi} tehtavia={osa.tehtavia}/>)
    return (
        <div>
            <ul>
                {osaComponents()}
            </ul>
        </div>
    )
}

const Osa = (props) => {
    return (
        <div>
            <p>{props.osa} {props.tehtavia}</p>
        </div>
    )
}

export default Kurssi