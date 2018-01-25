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
            positiivisia: 0
        }
    }

    clickHyva = () => {
        this.setState({
            hyva: this.state.hyva + 1,
            keskiarvo: (this.state.hyva + 1 + (this.state.huono * -1)) / (this.state.hyva + 1 + this.state.huono + this.state.neutraali),
            positiivisia: ((this.state.hyva + 1) / (this.state.hyva + 1 + this.state.huono + this.state.neutraali)) * 100
        })
    }

    clickNeutraali = () => {
        this.setState({
            neutraali: this.state.neutraali + 1,
            keskiarvo: (this.state.hyva + (this.state.huono * -1)) / (this.state.hyva + this.state.huono + this.state.neutraali + 1),
            positiivisia: ((this.state.hyva) / (this.state.hyva + this.state.huono + this.state.neutraali + 1)) * 100
        })
    }

    clickHuono = () => {
        this.setState({
            huono: this.state.huono + 1,
            keskiarvo: (this.state.hyva + ((this.state.huono + 1) * - 1)) / (this.state.hyva + this.state.huono + 1 + this.state.neutraali),
            positiivisia: ((this.state.hyva) / (this.state.hyva + this.state.huono + 1 + this.state.neutraali)) * 100
        })
    }



    render = () => {
        return (
            <div>
                <br />
                <em>anna palautetta</em>
                <br />
                <br />
                <div>
                    <Button kasvata={this.clickHyva} arvo={'Hyvä'} />
                    <Button kasvata={this.clickNeutraali} arvo={'Neutraali'} />
                    <Button kasvata={this.clickHuono} arvo={'Huono'} />
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
                <Statistic teksti={'Hyvä'} arvo={props.hyva} />
                <Statistic teksti={'Neutraali'} arvo={props.neutraali} />
                <Statistic teksti={'Huono'} arvo={props.huono} />
                <Statistic teksti={'Keskiarvo'} arvo={props.keskiarvo} />
                <Statistic teksti={'Positiivisia'} arvo={props.positiivisia + '%'} />
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
        <div>
            {props.teksti} {props.arvo}<br />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

