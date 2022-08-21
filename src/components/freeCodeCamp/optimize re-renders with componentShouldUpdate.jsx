import React from "react";

// ``nextProps`` differs from ``props`` in that it is a value 
// that has not been rendered in the UI yet so in the 
// ```shouldComponentUpdate()``` method, you are essentially asking 
// permission to update the UI with the ```nextProps``` value.

class OptimizeRerendersWithComponentShouldUpdate extends React.Component {
    constructor() {
        super();

        this.state = { value: 0 }
        this.addValue = this.addValue.bind(this)
    }
    addValue() {
        this.setState( state => ({
            value: state.value + 1
        }))
    }
    render() {
        return(
            <div>
                <button onClick={this.addValue}>Add</button>
                <OptimizeRerenders value={this.state.value} />
            </div>
        )
    }
}
class OptimizeRerenders extends React.Component {
    constructor() {
        super();
    }

    componentWillReceiveProps(nextProps) {
        console.log('receiving new props..')
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('Should re-render?', 'this->', 
                this.props.value, 'next=>',nextProps)
        
        return nextProps.value % 2 == 0 ? true : false;
    }
    componentDidUpdate() {
        console.log("re-rendred")
    }

    render() {
        return (
            <div>
             <h1>this {this.props.value}</h1>
            </div>
        );
    }
}

export default OptimizeRerendersWithComponentShouldUpdate;