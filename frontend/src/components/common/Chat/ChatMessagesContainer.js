import React, {PropTypes} from 'react'
import ChatMessageContainer from './ChatMessageContainer'

require('./ChatMessagesContainer.scss');

class ChatMessagesContainer extends React.Component {
    render() {
        return (
            <div className={"chat-messages-container"}>
                {this.props.messages.map((messageItem, index) => <ChatMessageContainer img={messageItem.img} fromSelf={this.props.recipient.name !== messageItem.author} key={messageItem.id}>{messageItem.message}</ChatMessageContainer>)}
            </div>
        );
    }
}

ChatMessagesContainer.propTypes = {
    messages: PropTypes.array,
    recipient: PropTypes.object
};

export default ChatMessagesContainer;