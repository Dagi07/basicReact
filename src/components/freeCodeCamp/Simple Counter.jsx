import React from "react";

class SimpleCounter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this)
    }
    increment() {
        this.setState(state => ({count: state.count + 1}))
    };
    decrement() {
        this.setState(state => ({count: state.count - 1}))
    };
    reset() {
        this.setState(state => ({count: 0}))
    };

    render() {
        return (
            <span>
                <div>
                    <button onClick={this.increment}>Increment</button>
                </div>
                <button onClick={this.decrement}>Decrement</button>
                <span>
                    <button onClick={this.reset}>Reset</button>
                </span>
                <h2>Counter: {this.state.count}</h2>
            </span>
        )
    }
}
export default SimpleCounter;