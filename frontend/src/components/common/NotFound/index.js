import React, {PropTypes} from 'react'

require('./NotFound.scss');

const NotFound = ({children}) => {
    return (
        <h1 className={"not-found"}>{children}</h1>

    );
};

NotFound.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default NotFound;