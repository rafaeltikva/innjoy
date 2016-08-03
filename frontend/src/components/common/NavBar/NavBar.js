import React, {PropTypes} from 'react'
import {Col, Navbar, Nav, NavItem, NavDropdown, Dropdown, MenuItem} from 'react-bootstrap'
import AppBar from 'material-ui/AppBar'
import NavBarLogoSection from './NavBarLogoSection/NavBarLogoSection'
import NavBarSearchSection from './NavBarSearchSection/NavBarSearchSection'
import NavBarRightSection from './NavBarRightSection/NavBarRightSection'
import SearchForm from '../Search/SearchForm/SearchForm'

require('./NavBar.scss');


const NavBar = ({includeSearch, className, chats, notifications, chatsComponent}) => {
    return (
        <AppBar titleStyle={{display: "none" }} className={"navbar"}>
            <NavBarLogoSection />
            {includeSearch ? <NavBarSearchSection /> : null}
            <NavBarRightSection chatsComponent={chatsComponent} chats={chats} notifications={notifications} />
        </AppBar>
    );

};

NavBar.propTypes = {
    includeSearch: PropTypes.bool,
    className: PropTypes.string,
    chats: PropTypes.object,
    notifications: PropTypes.object,
    chatsComponent: PropTypes.any
};

export default NavBar;