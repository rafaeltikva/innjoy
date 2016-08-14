import React, {PropTypes} from 'react'
import ChatBubbleButton from './ChatBubbleButton'
import ChatGreeting from './ChatGreeting'

require('./ChatBubble.scss');

class ChatBubble extends React.Component {

    render() {
        console.log('rendering ChatBubble');
        return (
            <div className={"chat-bubble"}>
                <ChatGreeting showGreeting={this.props.showGreeting} onClose={this.props.onHideGreeting} />
                <ChatBubbleButton img={this.props.user.img} tooltip={this.props.user.name + ' - '  + this.props.user.role} numOfUnread={this.props.numOfUnread} showButton={this.props.showBubble} onTouchTap={this.props.onToggleChatWindow} />
            </div>
        );
    }

}


ChatBubble.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default ChatBubble;