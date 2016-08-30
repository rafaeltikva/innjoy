import React, {PropTypes} from 'react'

require('./ComingSoonMessage.scss');

const ComingSoonMessage = ({children}) => {
    return (
        <h1 className={"coming-soon-message"}>Coming Soon...</h1>

    );
};

ComingSoonMessage.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default ComingSoonMessage;