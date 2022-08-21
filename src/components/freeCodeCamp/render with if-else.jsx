import React from "react";

class IfElseinRender extends React.Component {
    constructor() {
        super();

        this.state = { display: true }
        this.toggleDisplay = this.toggleDisplay.bind(this)
    }
    toggleDisplay() {
        this.setState( state =>( {
            display: !state.display
        }))
        console.log(this.state.display)
    }
    render() {
        if (this.state.display) {
            return (
                <div>
                    <button onClick={this.toggleDisplay}>Toggle it</button>
                    <br />
                    <br />
                    <h1>Displayed</h1>
                </div>
            )
        } else {
            return (
                <div>
                    <button onClick={this.toggleDisplay}>Toggle it</button>
                </div>
            )
        }
    }
}

export default IfElseinRender;

