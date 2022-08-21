import React from "react";

const styles = {
    width: 250,
    margin: 5
}

class Magic8ballGame extends React.Component {
    constructor() {
        super();

        this.ask = this.ask.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    state = {
        inputValue: '',
        randomIndex: ''
    }
    ask() {
        if (this.state.inputValue) {
            this.setState({
                randomIndex: Math.floor(Math.random() * 20),
                inputValue: ''
            })
        }
  }
    handleChange(event) {
        this.setState({
            inputValue: event.target.value,
        })
    }

    render() {
        const possibleAnswers = [
            'It is certain',
            'It is decidedly so',
            'Without a doubt',
            'Yes, definitely',
            'You may rely on it',
            'As I see it, yes',
            'Outlook good',
            'Yes',
            'Signs point to yes',
            'Reply hazy try again',
            'Ask again later',
            'Better not tell you now',
            'Cannot predict now',
            'Concentrate and ask again',
            "Don't count on it",
            'My reply is no',
            'My sources say no',
            'Most likely',
            'Outlook not so good',
            'Very doubtful'
        ];
        const answer = possibleAnswers[this.state.randomIndex];

        return(
            <div>
                <input type='text' style={styles} 
                        value={this.state.inputValue}
                        onChange={this.handleChange} 
                        />
                <div><button onClick={this.ask}>Ask magic ball 8</button></div>
                <p>{answer}</p>
            </div>
        )
    }
}

export default Magic8ballGame;