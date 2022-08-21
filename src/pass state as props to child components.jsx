import React from "react";

class MyApp extends React.Component {
    constructor() {
        super();
    }
    state = { name: 'Dagmawi'}

    render() {
        return(
            <div>
                <Navbar name={this.state.name} />
            </div>
        )
    }
}

class Navbar extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <h1>Hello, my name is: {this.props.name}</h1>
            </div>
        )
    }
}

export default MyApp;