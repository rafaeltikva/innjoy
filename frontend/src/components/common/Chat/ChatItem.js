import React, {PropTypes} from 'react'
import MenuItem from 'material-ui/MenuItem'
import UserAvatar from '../User/UserAvatar/UserAvatar'
import Divider from 'material-ui/Divider'
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

require('./ChatItem.scss');

class ChatItem extends React.Component {

    constructor(props) {
        super(props);
        this.openChat = this.openChat.bind(this, this.props.chat);

    }

    openChat(chat) {
        this.props.addChatBubble(chat); // adding the chat to the Chats component

    }

    render() {
        console.log('rendering ChatItem');

        let {user, messages} = this.props.chat;
        let lastMessage = messages[messages.length - 1];
        let lastMessageExcerpt = lastMessage.message.length > 65 ? lastMessage.message.substr(0, 65) + '...' : lastMessage.message;

        return (
            <MenuItem className={this.props.hasNew ? "menu-item chat-item unread" : "menu-item chat-item"}
                      rightIcon={<CommunicationChatBubble />} onTouchTap={this.openChat}>
                <UserAvatar size={60}/>

                <div className="message-container">
                    <span className={"message-author"}>{user.name} {user.role ? " - " + user.role : undefined}</span>
                    <span className={"message-excerpt"}>{lastMessageExcerpt}</span>
                    <span className={"message-date"}>{lastMessage.date}</span>
                </div>
                <Divider style={{margin: "5px"}}/>

            </MenuItem>
        );
    }
}

ChatItem.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default ChatItem;