import React, {PropTypes} from 'react'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'
import UserAvatar from '../User/UserAvatar/UserAvatar'

require('./NotificationItem.scss');

class NotificationItem extends React.Component {
    render() {
        console.log('rendering NotificationItem', this.props.notification);
        let {author, content, date, options} = this.props.notification;
        let contentExcerpt = content.length > 65 ? content.substr(0, 65) + '...' : content;

        return (
            <MenuItem className={options.isRead ? "menu-item notification-item" : "menu-item notification-item unread"}>
                <UserAvatar size={60}/>

                <div className="message-container">
                    <span className={"message-author"}>{author}</span>
                    <span className={"message-excerpt"}>{contentExcerpt}</span>
                    <span className={"message-date"}>{date}</span>
                </div>
                <Divider style={{margin: "5px"}}/>
            </MenuItem>

        );
    }
}

NotificationItem.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default NotificationItem;