import React, {PropTypes} from 'react'
import {NavItem} from 'react-bootstrap'
import IconButton from 'material-ui/IconButton'
import Badge from 'material-ui/Badge'
import IconMenu from 'material-ui/IconMenu'
import NotificationItem from './NotificationItem'


require('./NotificationsMenu.scss');

const NotificationsMenu = ({notifications, className, href, children}) => {
    console.log('rendering NotificationsIcon');
    console.log('the className:', className);
    let notificationItems = [];
    let numOfUnread = 0;
    notifications.data.forEach((notification, index) => {
        if (!notification.options.isRead) {
            numOfUnread++;
        }
        notificationItems.push(<NotificationItem key={notification.id} notification={notification}/>)
    });

    return (

            <IconMenu className={"nav-menu notifications-menu"} anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
                      iconButtonElement={<Badge badgeStyle={{opacity: numOfUnread > 0 ? 1 : 0 }} className={"notifications-badge alert-badge"} badgeContent={numOfUnread}><IconButton iconClassName={"fa fa-bell nav-icon notifications-icon"} className={"nav-button notifications-button"} tooltip="Notifications" /></Badge>}>
                {notificationItems}
            </IconMenu>
    );

};

NotificationsMenu.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default NotificationsMenu;