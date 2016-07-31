import React, {PropTypes} from 'react'
require('./Footer.scss');

const Footer = ({children}) => {
    console.log('rendering Footer');
    return (
        <footer>
            {children}
        </footer>
    );
};

Footer.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default Footer