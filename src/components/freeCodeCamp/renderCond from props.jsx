import React from "react";

class Results extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                {this.props.fiftyFifty ? <h1>You Win!</h1> : <h1>You Lose!</h1>}
            </div>
        )
    }
}

class RenderCondProps extends React.Component {
    constructor() {
        super();

        this.state = { counter: 1}

        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.setState(prevState => ({
            counter: prevState.counter + 1
        }))
    }

    render() {
        const expressions = Math.random() >= .5;
        return (
            <div>
                <button onClick={this.handleClick}>Play Again</button>
                <Results fiftyFifty={expressions} />
                <p>Turn: {this.state.counter}</p>
            </div>
        )
    }
}

export default RenderCondProps;