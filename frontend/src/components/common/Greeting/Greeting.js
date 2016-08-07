import React, {PropTypes} from 'react'

require('./Greeting.scss');

const Greeting = ({message}) => {

    return (
        <div className={"greeting-container"}>
            <span className="greeting">{message}</span>
        </div>
    );
};

Greeting.propTypes = {
    message: PropTypes.string.isRequired
};

export default Greeting;