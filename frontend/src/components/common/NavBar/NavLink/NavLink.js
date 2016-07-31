import React, {PropTypes} from 'react'
import {Link} from 'react-router'

const NavLink = (props) => {
    return (
        <Link {...props}>{props.children}</Link>
    );
};

NavLink.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default NavLink;