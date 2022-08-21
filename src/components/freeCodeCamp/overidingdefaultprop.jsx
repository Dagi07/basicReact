import React from "react";

const Items = (props) => {
    return (
        <h1>
            Current amount of Items in Cart : {props.quantity}
        </h1>
    )
}

Items.defaultProps = { 
    quantity: 0
}

class ShoppingCartOverride extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Items  quantity = {10} />

    }
}

export default ShoppingCartOverride;