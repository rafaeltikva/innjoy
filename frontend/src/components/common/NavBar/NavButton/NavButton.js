import React, {PropTypes} from 'react'
import ChatButton from '../Chat/ChatButton'
import NotificationsButton from '../Notifications/NotificationsButton'
import UserButton from '../UserAvatar/UserButton'
import SearchButton from '../SearchButton/SearchButton'

require('./NavButton.scss');

const NavButton = ({type}) => {
    console.log('rendering NavButton');

    switch (type) {
        case 'chat':
            return (
                <ChatButton className={'nav-button'}/>
            );
        case 'notifications':
            return (
                <NotificationsButton className={'nav-button'}/>
            );
        case 'user':
            return (
                <UserButton className={'nav-button'}>Rafael</UserButton>
            );
        case 'search':
            return (
                <SearchButton />
            );
        default:
            return;
    }
};

NavButton.propTypes = {
    type: PropTypes.string.isRequired
};

export default NavButton;