import React, {PropTypes} from 'react';

require('./Logo.scss');

const Logo = (props) => {
    console.log('rendering Logo');
    return (
        <img {...props} className="hotel-logo" />
    );
};

Logo.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default Logo