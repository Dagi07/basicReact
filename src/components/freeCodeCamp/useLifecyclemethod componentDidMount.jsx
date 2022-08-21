import React from "react";

class ComponentDidMount extends React.Component {
    constructor() {
        super();

        this.state = { activeUsers: 'loading...'}
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                activeUsers: 500
            })
        }, 7500)
    }
    render() {
        return (
             <div>
                <h1>Active Users:</h1> <span className={this.getBadgeClasses()}>{this.state.activeUsers}</span>
             </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.activeUsers);
        return classes;
    }
}
export default ComponentDidMount;