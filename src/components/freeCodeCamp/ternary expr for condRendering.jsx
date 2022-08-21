import React from 'react';

const styles = {
    width: 250,
    margin: 5
}

class Ternary extends React.Component {
    constructor() {
        super();

        this.handleChange = this.handleChange.bind(this)
        this.submit = this.submit.bind(this)
    }
    state = {
        input: '',
        userAge: ''
    }
    handleChange(e) {
        this.setState( {
            input: e.target.value,
            userAge: ''
        })
    }
    submit() {
        this.setState( state  => ({
            userAge: state.input
        }))
    }

    render() {
        const buttonOne = <button onClick={this.submit}>Submit</button>
        const buttonTwo = <button>You may enter</button>
        const buttonThree = <button>You shall not pass</button>
        const {userAge} = this.state;

        return (
            <div>
                <input type='number'
                       value={this.state.input}
                       onChange={this.handleChange}
                       style={styles} 
                />
                <br />
                {userAge ? userAge < 18 ? buttonThree : buttonTwo : buttonOne }
            </div>
        )
    }
}

export default Ternary;