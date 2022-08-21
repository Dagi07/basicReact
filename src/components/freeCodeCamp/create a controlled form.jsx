import React from "react";

class MyFrom extends React.Component {
    constructor() {
        super();

        this.state = {
            input: '',
            submit: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({
            input: event.target.value
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            submit: this.state.input
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.input}
                            onChange={this.handleChange} />
                    <button type="submit">
                                Submit
                    </button>
                    <h1>{this.state.submit}</h1>
                </form>
            </div>
        )
    }
}
export default MyFrom;