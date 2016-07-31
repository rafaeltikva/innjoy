import React, {PropTypes} from 'react'

require('./Greeting.scss');

const Greeting = ({message}) => {

    return (
        <span className="greeting">{message}</span>
    );
};

Greeting.propTypes = {
    message: PropTypes.string.isRequired
};

export default Greeting;