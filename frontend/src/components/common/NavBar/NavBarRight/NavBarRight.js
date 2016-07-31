import React, {PropTypes} from 'react'
import ChatMenu from '../../Chat/ChatMenu'
import NotificationsMenu from '../../Notifications/NotificationsMenu'
import UserMenu from '../../User/UserMenu'

require('./NavBarRight.scss');

const NavBarRight = ({chats, notifications, chatsComponent}) => {
    console.log('rendering NavBarRight', chats);
    return (
        <nav>
            <ChatMenu chatsComponent={chatsComponent} chats={chats} />
            <NotificationsMenu notifications={notifications} />
            <UserMenu />
        </nav>
    );
};

NavBarRight.propTypes = {
    chats: PropTypes.object,
    notifications: PropTypes.object,
    chatsComponent: PropTypes.any

};

export default NavBarRight;