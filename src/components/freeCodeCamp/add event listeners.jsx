import React from "react";

class AddEventListeners extends React.Component {
    constructor() {
        super();

        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleEnter = this.handleEnter.bind(this)
    }
    state = { listener: ""}

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress)
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress)
    }

    handleKeyPress(event) {
        if (event.keyCode === 13) {
            this.handleEnter();
        }
    }
    handleEnter() {
        this.setState( (state) => ({
            listener: state.listener + "You clicked Enter key! "
        }))
    }

    render() {
        return (
            <div>
                <h1>{this.state.listener}</h1>
            </div>
        )
    }
}
export default AddEventListeners;