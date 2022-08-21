import React from 'react';

const ShoppingCart = (props) => {
    return (
        <div>
            <h2>Shopping cart component {props.defaultProps}</h2>
        </div>
    )
}

ShoppingCart.defaultProps = { items: 0}

export default ShoppingCart;