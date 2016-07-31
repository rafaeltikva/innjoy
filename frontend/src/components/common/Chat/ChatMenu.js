import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import Badge from 'material-ui/Badge'
import Subheader from 'material-ui/Subheader'
import Divider from 'material-ui/Divider'
import ChatItem from './ChatItem'
import * as chatActions from '../../../actions/chatActions'

require('./ChatMenu.scss');

class ChatMenu extends React.Component {

    render() {
        let {chats, chatsComponent} = this.props;
        let chatItems = [];
        let numOfUnread = 0;
        chats.data.forEach((chat, index) => {
                let hasNew = false;
                if (chat.options.hasNew) {
                    hasNew = true;
                    numOfUnread++;
                }
                chatItems.push(<ChatItem key={chat.id} chat={chat} hasNew={hasNew} addChatBubble={chatsComponent ? chatsComponent.addChat : undefined} />);
            }
        );

        console.log('rendering ChatMenu');
        console.log("Chats: ", chats);
        console.log("chatsComponent: ", chatsComponent);

        return (
            <IconMenu className={"nav-menu chat-menu"} anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
                      iconButtonElement={<Badge badgeStyle={{opacity: numOfUnread > 0 ? 1 : 0 }} className={"notifications-badge alert-badge"} badgeContent={numOfUnread} ><IconButton iconClassName={"fa fa-comments nav-icon chat-icon"} className={"nav-button chat-button"} tooltip={"Chat"} /></Badge>}>
                <Subheader>Recent Chats</Subheader>
                <Divider />
                {chatItems}
            </IconMenu>
        );
    }
}


ChatMenu.propTypes = {
    //myProp: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
    let {chats} = state;
    return {
        chats
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: chatActions
    }

}

export default ChatMenu;