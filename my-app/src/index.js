import React from 'react';
import ReactDOM from 'react-dom';
import Kurssi from './components/Kurssi'

const App = (props) => {
    const { kurssit } = props
    const kurssiComponents = () => kurssit.map(kurssi => <li key={kurssi.id}><Kurssi kurssi={kurssi} /></li>)
    
    return (
        <div>
            <h1>Opetusohjelma</h1>
            <ul>
                {kurssiComponents()}
            </ul>
        </div>
    )
}

const kurssit = [
    {
        nimi: 'Half Stack -sovelluskehitys',
        id: 1,
        osat: [
            {
                nimi: 'Reactin perusteet',
                tehtavia: 10,
                id: 1
            }, {
                nimi: 'Tiedonvälitys propseilla',
                tehtavia: 7,
                id: 2
            }, {
                nimi: 'Komponenttien tila',
                tehtavia: 14,
                id: 3
            }, {
                nimi: 'Redux',
                tehtavia: 7,
                id: 4
            }
        ]
    },
    {
        nimi: 'Node.js',
        id: 2,
        osat: [
            {
                nimi: 'Routing',
                tehtavia: 3,
                id: 1
            },
            {
                nimi: 'Middlewaret',
                tehtavia: 7,
                id: 2
            }
        ]
    }
]

ReactDOM.render(
    <App kurssit={kurssit} />,
    document.getElementById('root')
)
