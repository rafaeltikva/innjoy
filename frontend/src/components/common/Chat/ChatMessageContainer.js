import React, {PropTypes} from 'react'
import UserAvatar from '../User/UserAvatar'
import ChatMessage from './ChatMessage'

require('./ChatMessageContainer.scss');

const ChatMessageContainer = ({children, fromSelf}) => {
    return (
        <div className={fromSelf ? "chat-message-container from-self" : "chat-message-container from-recipient" }>
            <UserAvatar className={"user-avatar"} size={38}/>
            <ChatMessage>{children}</ChatMessage>
        </div>
    );
};

ChatMessageContainer.propTypes = {
    children: PropTypes.string,
    fromSelf: PropTypes.bool

};

export default ChatMessageContainer;