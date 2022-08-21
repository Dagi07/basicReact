import React from "react";

class StatefulComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = { firstName: "React"}
    }
    render() {
        return (
            <p>{this.state.firstName}</p>
        )
    }
}

export default StatefulComponent;