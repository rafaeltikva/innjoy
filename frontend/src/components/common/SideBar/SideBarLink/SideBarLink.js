import React, {PropTypes} from 'react';
import {Link} from 'react-router';

require('./SideBarLink.scss');

const SideBarLink = (props) => {
    return (
        <Link {...props} className={"sidebar-link"} activeClassName="sidebar-link-active">{props.children}</Link>
    );
};

SideBarLink.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default SideBarLink