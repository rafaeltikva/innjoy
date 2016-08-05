import React, {PropTypes} from 'react'
import IconButton from 'material-ui/IconButton'
import Badge from 'material-ui/Badge'
import UserAvatar from '../User/UserAvatar'

require('./ChatBubbleButton.scss');

class ChatBubbleButton extends React.Component {
    render() {
        return (
            <IconButton tooltip={this.props.tooltip} tooltipPosition={"top-center"} className={"chat-bubble-button"} onTouchTap={this.props.onTouchTap}
                        style={{display: this.props.showButton ? "inherit" : "none", height: "60px", width: "60px", padding: 0}}>
                <Badge badgeStyle={{opacity: this.props.numOfUnread > 0 ? 1 : 0 }} className={"chat-badge alert-badge"} badgeContent={this.props.numOfUnread}>
                    <UserAvatar size={60}/>
                </Badge>

            </IconButton>
        );
    }
}

ChatBubbleButton.propTypes = {
    numOfUnread: PropTypes.number.isRequired,
    showButton: PropTypes.bool
};

export default ChatBubbleButton;