import React from 'react';

class CSScheck extends React.Component {
    constructor() {
        super();

        this.handleChange = this.handleChange.bind(this)
    }
    state = { input: ''}

    handleChange(event) {
        this.setState({ input: event.target.value})
    }

    render() {
        const InputStyle = { border: '2px solid black'}
        if (this.state.input.length > 15) {InputStyle.border= '3px solid red' }

        return (
            <div>
                <h3>Don't Type Too Much:</h3>
                <input type="text"
                       style={InputStyle} 
                       value={this.state.input}
                       onChange={this.handleChange} />
                
            </div>
        )
    }
}

export default CSScheck;