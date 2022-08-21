import React from 'react';

class Statefull extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'DagemReact'
        }
    }
    render() {
        return (
            <h1>{this.state.name}</h1>
        )
    }
}
export default Statefull;