import PropTypes from "prop-types";
import React from "react";

const Items = (props) => {
    console.log(typeof(Items.propTypes))
    return typeof(props.quantity) === 'number'  ? (
        <h1>
            Current quantity of Items in Cart: {props.quantity}
        </h1>
    ) : <h2>not  same prop type</h2>;

}

Items.propTypes = { quantity: PropTypes.number.isRequired};

Items.defaultProps = { quantity: 0}
class ShoppingCartProptype extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Items quantity={100} />
        );
    }
}

export default ShoppingCartProptype;