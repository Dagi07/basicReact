import React, {Component} from "react";

// method for to update state
// never modify state directly, instade use this.setState()

class UpdateState extends React.Component {
    constructor(props) {
        super(props);

        this.state = { master: 'React'};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            master: 'React very well!'
        });
    }
    
    render() {
        return (
            <div>
                <button onClick = {this.handleClick}>Master React</button>
                <h1>{this.state.master}</h1>
            </div>
        )
    }
}

export default UpdateState;