import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hyva: 0,
            neutraali: 0,
            huono: 0,
            keskiarvo: 0,
            positiivisia: 0,
            kaikki: 0
        }
    }
    
    laske = () => {
        this.setState({
            keskiarvo: (this.state.hyva + ((this.state.huono) * - 1)) / (this.state.kaikki + 1),
            positiivisia: ((this.state.hyva) / (this.state.kaikki + 1)) * 100,
            kaikki: this.state.kaikki + 1
        })
    }

    clickKasittelija = (nimi) => {
        return () => {
            this.setState({
                [nimi]: this.state[nimi] + 1
            })
            this.laske()
        }
    }

    render = () => {
        return (
            <div>
                <br />
                <em>anna palautetta</em>
                <br />
                <br />
                <div>
                    <Button kasvata={this.clickKasittelija('hyva')} arvo={'Hyvä'} />
                    <Button kasvata={this.clickKasittelija('neutraali')} arvo={'Neutraali'} />
                    <Button kasvata={this.clickKasittelija('huono')} arvo={'Huono'} />
                </div>
                <br />
                <em>statistiikka</em>
                <br />
                <br />
                <div>
                    <Statistics hyva={this.state.hyva} neutraali={this.state.neutraali} huono={this.state.huono} keskiarvo={this.state.keskiarvo} positiivisia={this.state.positiivisia} />
                </div>
            </div>
        )
    }
}

const Button = (props) => {
    return (
        <div>
            <button onClick={props.kasvata}>{props.arvo}</button>
        </div>
    )
}

const Statistics = (props) => {
    if (props.hyva !== 0 || props.neutraali !== 0 || props.huono !== 0) {
        return (
            <div>
                <table>
                    <tbody>
                        <Statistic teksti={'Hyvä'} arvo={props.hyva} />
                        <Statistic teksti={'Neutraali'} arvo={props.neutraali} />
                        <Statistic teksti={'Huono'} arvo={props.huono} />
                        <Statistic teksti={'Keskiarvo'} arvo={props.keskiarvo} />
                        <Statistic teksti={'Positiivisia'} arvo={props.positiivisia + '%'} />
                    </tbody>
                </table>
            </div>
        )
    }

    return (
        <div>
            <p>ei yhtään palautetta annettu</p>
        </div>
    )

}

const Statistic = (props) => {
    return (
        <tr>
            <td>{props.teksti}</td><td>{props.arvo}</td>
        </tr>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

