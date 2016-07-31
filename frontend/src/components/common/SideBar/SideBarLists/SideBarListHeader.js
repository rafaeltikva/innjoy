import React, {PropTypes} from 'react'

require('./SideBarListHeader.scss');

const SideBarListHeader = ({children}) => {
    return (
        <span className={"sidebar-list-header"}>{children}</span>
    );
};

SideBarListHeader.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default SideBarListHeader;