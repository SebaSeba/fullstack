import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const kurssi = 'Half Stack -sovelluskehitys'
    const osa1 = 'Reactin perusteet'
    const tehtavia1 = 10
    const osa2 = 'Tiedonvälitys propseilla'
    const tehtavia2 = 7
    const osa3 = 'Komponenttien tila'
    const tehtavia3 = 14

return (
    <div>
      <Otsikko kurssi={kurssi}/>
      <Sisalto sisalto={osa1}/>
      <Yhteensa yhteensa={1}/>
    </div>
)
}

const Sisalto = () => {
    return (
        <div>
         <Osa />
         <Osa />
         <Osa />
      </div> 
    )
}

const Osa = () => {
    return (
        <div>
            <
      </div> 
    )
}

const Otsikko = () => {
    return (
        <div>
      </div> 
    )
}

const Yhteensa = () => {
    return (
        <div>
      </div> 
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
