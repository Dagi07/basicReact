import React from "react";

class ControlledInput extends React.Component {
  //ControlledInput child class, React.Component parent class
  constructor() { //calling contructor of child class
    super(); //calling contructor of parent class

    this.handleChange = this.handleChange.bind(this)

  }
  state = { input: ''}

  handleChange(event) {
    this.setState(state => ({
      input: event.target.value
    }))
  };
  
  render() {
    return (
      <div>
        <input 
          value={this.state.input} 
          onChange={this.handleChange} />
          <h3>Controlled input:</h3>
          <p>{this.state.input}</p>
      </div>
    )
  }
}


export default ControlledInput;