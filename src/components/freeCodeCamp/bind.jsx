import React from "react";

// A class method needs to use the keyword 'this', ..
// ..so it can access the properties on the class
// .. like ('state' & 'props') inside the scope of the method.
// bind 'this' inthe constructor so 'this' becomes bound to the class methods when the component is initialized.
// when calling a fn like 'this.setState()' within class method, 'this' refers to the class & wont be undefined.

class BindingThis extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            text: "keep on learning"
        };

        this.handleClick = this.handleClick.bind(this);
    };
    

    handleClick() {
        this.setState(state => ({
            text: state.text +  ", Keep learning React!"
        }));
    };

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click here</button>
                <h1>{this.state.text}</h1>
            </div>
        );
    }

    // constructor(props) {
    //     super(props);
        
    //     this.state = {
    //       text: "Hello"
    //     };
    //     // Change code below this line
    //     this.handleClick = this.handleClick.bind(this);
    //     // Change code above this line
    //   }
    //   handleClick() {
    //     this.setState({
    //       text: "You clicked!"
    //     });
    //   }
    //   render() {
    //     return (
    //       <div>
    //         { /* Change code below this line */ }
    //         <button onClick={this.handleClick}>Click Me</button>
    //         { /* Change code above this line */ }
    //         <h1>{this.state.text}</h1>
    //       </div>
    //     );
    //   }
}
export default BindingThis;