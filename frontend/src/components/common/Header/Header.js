import React, {PropTypes} from 'react'
import NavBar from './../NavBar/NavBar'


// load style
require('./Header.scss');

const Header = ({includeSearch, chats, notifications, chatsComponent}) => {

    console.log('rendering Header');
    return (
        <header className="header hotel-header">
            <NavBar includeSearch={includeSearch} chatsComponent={chatsComponent} chats={chats} notifications={notifications} className={"hotel-navbar"}/>
        </header>
    );

};

Header.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default Header;