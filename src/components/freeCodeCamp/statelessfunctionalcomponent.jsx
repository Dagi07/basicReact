import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Campsite extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Camper />
            </div>
        )
    }
}

const Camper = (props) => {
    // render() {
        return (
            <div>
                {props.name}
            </div>
        )
    // }
}
Camper.defaultProps = { name: 'CamperBot'};
Camper.propTypes = {name: PropTypes.string.isRequired}

export default Campsite;