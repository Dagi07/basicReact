import React from "react";

//you will be able to type in the input field in the GetInput component, 
//which then calls the handler method in its parent via props.
//This updates the input in the state of the parent, 
//which is passed as props to both children. Observe how the data flows 
//between the components and how the single source of truth remains the state of the parent component. 
//illustrate how data and callbacks can be passed between React components.

class CallbackProp extends React.Component {
    constructor() {
        super();

        this.state = { inputValue: ''}

        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        this.setState({
            inputValue: event.target.value
        })
    }
    render() {
        return (
            <div>
                <GetInput input={this.state.inputValue} 
                          handleChange={this.handleChange}/>
                <RenderInput input={this.state.inputValue}/>
            </div>
        )
    }
}

class GetInput extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
             <div>
                <h3>Get Input: </h3>
                <input value={this.props.input}
                       onChange={this.props.handleChange} />
             </div>
        );
    }
}

class RenderInput extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <h3>Input Rendered: </h3>
                <p>{this.props.input}</p>
            </div>
        )
    }
}

export default CallbackProp;