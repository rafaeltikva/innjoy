import React, {PropTypes} from 'react'
import Dialog from 'material-ui/Dialog'
import ChatMessagesContainer from './ChatMessagesContainer'
import ChatHeader from './ChatHeader'
import ChatInput from './ChatInput'

require('./ChatWindow.scss');

class ChatWindow extends React.Component {

    constructor() {
        super();
    }

    render() {
        console.log('rendering ChatWindow');
        return (
            <div className={"chat-window"} style={{display: this.props.showWindow ? "block" : "none"}}>
                <ChatHeader user={this.props.user} onChatClose={this.props.onChatClose} onChatMinimize={this.props.onChatMinimize} />
                <ChatMessagesContainer recipient={this.props.user.name} messages={this.props.messages} />
                <ChatInput />
            </div>
        );
    }

};


ChatWindow.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default ChatWindow;