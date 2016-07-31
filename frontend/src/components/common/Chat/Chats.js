import React, {PropTypes} from 'react'
import Chat from './Chat'

require('./Chats.scss');

class Chats extends React.Component {
    constructor(props, context) {
        super(props);
        this.state = {
            chats: this.props.chats.data
        };

        this.addChat = this.addChat.bind(this);
        this.removeChat = this.removeChat.bind(this);

    }

    addChat(newChat) {
        console.log('adding chat bubble', newChat);

        newChat.options.showBubble = true;
        newChat.options.showWindow = true;

        this.state.chats = this.state.chats.filter((chat) => chat.id !== newChat.id); // removing current chat, and readding it later
        this.state.chats.push(newChat);

        this.setState({chats: this.state.chats});
        console.log('updated chats:', this.state.chats);
    }

    removeChat(chatId) {
        this.setState({chats: this.state.chats.filter((chat) => chatId !== chat.id)});
    }

    componentWillReceiveProps(nextProps) {
        console.log('Chats receiving new props: ', nextProps);
        this.setState({
            chats: nextProps.chats.data
        });
    }

    render() {

        console.log('rendering Chats');
        return (
            <div id={"chats"}>
                {this.state.chats.map((chat, index) => {
                    if (chat.options.showBubble) {
                        return <Chat key={chat.id} chat={chat} removeChat={this.removeChat}/>;
                    }
                })}
            </div>
        );
    }
}

Chats.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default Chats;