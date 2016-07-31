import React, {PropTypes} from 'react'


require('./ChatMessage.scss');

const ChatMessage = ({children}) => {
    return (
        <div className={"chat-message"}>
            <span>{children}</span>
        </div>
    );
};

ChatMessage.propTypes = {
    children: PropTypes.string
};

export default ChatMessage;