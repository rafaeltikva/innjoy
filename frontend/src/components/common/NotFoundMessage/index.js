import React, {PropTypes} from 'react'

require('./NotFoundMessage.scss');

const NotFoundMessage = ({children}) => {
    return (
        <h1 className={"not-found-message"}>{children}</h1>

    );
};

NotFoundMessage.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default NotFoundMessage;