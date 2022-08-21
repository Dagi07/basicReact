import React from 'react';

let textAreaStyle = {
    width: "100%",
    height: 100,
    margin: 5,
    backgroundColor: "lightBlue"
}
let buttonStyle = {
    width: "25%",
    // position: 'fixed',
    // margin: 'auto',
    // left: "50%"
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

class MaptoDynamicallyRender extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    state = {
        userInput: '',
        toDoList: []
    }
    handleSubmit() {
        const itemsArray = this.state.userInput.split(' ')
        this.setState(state => ({
            toDoList: itemsArray
        }))
    }
    handleChange(e) {
        this.setState(state => ({
            userInput: e.target.value
        }))
    }

    render() {
        const items = this.state.toDoList.map(item => <li>{item}</li>)
        return (
            <div>
                <textarea value={this.state.userInput}
                        onChange={this.handleChange}
                        type='text'
                        style={textAreaStyle}
                        placeholder={"enter comma separated"} />
                <br />
                <button style={buttonStyle}onClick={this.handleSubmit}>Create list</button>
                <br />
                <h2>My to do list</h2>
                <ul>{items}</ul>
            </div>

        )
    }
}

export default MaptoDynamicallyRender;