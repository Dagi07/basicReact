import React from "react";

// Note that you have to wrap the object literal in parentheses, otherwise JavaScript thinks it's a block of code.

class Toggle extends React.Component {
    constructor(props) {
        super(props);

        this.state = { visibility: false}

        this.toggleVisibility = this.toggleVisibility.bind(this);
    }
    toggleVisibility() {
        this.setState(state => ({
            // if (state.visibility == true) 
            //     return {visibility: false}
            // else 
            //     return {visibility: true}
            visibility: !state.visibility
        
        }))
    }
    render() {
        if (this.state.visibility) 
            return (
                <div>
                    <button onClick={this.toggleVisibility}>React</button>
                    <h1>Just keep learning React</h1>
                </div>
            )
        else 
            return (
                <button onClick={this.toggleVisibility}>React</button>
            )
    }
} 
export default Toggle;