import React, {Component} from "react";

class AnotherWaytoaccessState extends React.Component {
    constructor(props) {
        super(props)

        this.state = { learn: "React"}
    }
    render() {
        const beStrong = this;
        console.log(this)
        return (
            <b>{this.state.learn}</b>
        )
    }
}

export default AnotherWaytoaccessState;