import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: 0,
            votes: new Array(anecdotes.length - 1)
        }
    }

    getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    updateSelected = () => {
        this.setState({
            selected: this.getRandomInt(0, anecdotes.length - 1)
        })
    }

    voteSelected = (votes, voted) => {
        return () => {
            let newVotes = votes
            if (!votes[voted]) {
                votes[voted] = 0
            }                        
            newVotes[voted] = newVotes[voted] + 1
            this.setState({
                votes: newVotes
            })
        }
    }


    render() {
        let votes = 0
        if (this.state.votes[this.state.selected]) {
            votes = this.state.votes[this.state.selected]
        }
        return (
            <div>
                {this.props.anecdotes[this.state.selected]}
                <div>Has votes {votes}</div>
                <Button updateSelected={this.updateSelected} />
                <Vote voteSelected={this.voteSelected(this.state.votes, this.state.selected)} />
            </div>
        )
    }
}

const Button = (props) => {
    return (
        <div>
            <button onClick={props.updateSelected}>next anecdote</button>
        </div>
    )
}

const Vote = (props) => {
    return (
        <div>
            <button onClick={props.voteSelected} >vote</button>
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)