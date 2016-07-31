import React, {PropTypes} from 'react'
import NavBarSection from '../NavBarSection/NavBarSection'
import NavLink from '../NavLink/NavLink'
import Logo from '../../Logo/Logo'

require('./NavBarLogoSection.scss');

const NavBarLogoSection = (props) => {
    return (
        <NavBarSection className={"navbar-section-logo"}>
            <NavLink to={"/"}><Logo src={"/img/LOGO.png"} /></NavLink>
        </NavBarSection>
    );
};

NavBarLogoSection.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default NavBarLogoSection;