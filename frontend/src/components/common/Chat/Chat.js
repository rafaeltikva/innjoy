import React, {PropTypes} from 'react'
import ChatBubble from './ChatBubble'
import ChatWindow from './ChatWindow'

require('./Chat.scss');

class Chat extends React.Component {
    constructor(props, context) {
        super(props);
        this.state = {
            showWindow: this.props.chat.options.showWindow,
            showBubble: this.props.chat.options.showBubble,
            showGreeting: false
        };
        this.toggleChatWindow = this.toggleChatWindow.bind(this);
        this.closeChat = this.closeChat.bind(this);
        this.minimizeChat = this.minimizeChat.bind(this);
        this.hideGreeting = this.hideGreeting.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            showWindow: nextProps.chat.options.showWindow,
            showBubble: nextProps.chat.options.showBubble,

        });
    }

    toggleChatWindow() {
        console.log('opening Chat Window');
        this.setState({
            showWindow: !this.state.showWindow,
            showBubble: !this.state.showBubble,
            showGreeting: false
        });
    }

    closeChat() {
        console.log('closing Chat Window');
        this.props.removeChat(this.props.chat.id);
    }

    minimizeChat() {
        console.log('closing Chat Window');
        this.setState({showWindow: false, showBubble: true});
    }

    hideGreeting(event, target) {
        this.setState({showGreeting: false});
    }

    componentDidMount() {
        this.setState({showGreeting: this.props.chat.user.role === 'Concierge' ? true : false});
    }

    render() {
        let {user, messages} = this.props.chat;
        let numOfUnread = messages.filter((message) => !message.isRead).length;
        console.log('rendering Chat');
        return (
            <div className={this.state.showWindow ? "chat expand" : "chat"}>
                <ChatBubble username={user.name} numOfUnread={numOfUnread} showBubble={this.state.showBubble} showGreeting={this.state.showGreeting} onHideGreeting={this.hideGreeting}
                            onToggleChatWindow={this.toggleChatWindow}/>
                <ChatWindow username={user.name} messages={messages} showWindow={this.state.showWindow} onChatClose={this.closeChat} onChatMinimize={this.minimizeChat} />
            </div>
        );
    }
}

Chat.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default Chat;