import React, {PropTypes} from 'react'

require('./NavBarSection.scss');

const NavBarSection = ({className, children}) => {

    return (
        <div className={"navbar-section " + className}>{children}</div>
    );
};

NavBarSection.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default NavBarSection;