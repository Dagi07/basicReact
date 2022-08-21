import React from "react";

const Lists = (props) => {
    return (
        <p>{props.tasks.join(', ')}</p>
    )
}


class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h3>Today</h3>
                <Lists tasks={["workout", "walk dog"]}/>
                <h3>Tomorrow</h3>
                <Lists tasks={["code", "workout", "go to Church"]}/>
            </div>
        )
    }
}

export default TodoList;