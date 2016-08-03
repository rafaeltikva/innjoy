import React, {PropTypes} from 'react'
import CloseButton from '../Button/CloseButton'
import MinimizeButton from '../Button/MinimizeButton'

require('./ChatHeader.scss');

const ChatHeader = (props) => {
    return (
        <header className={"chat-header"}>
            <span className={"chat-header-username chat-header-item"}>{props.user.name + ' - '  + props.user.role}</span>

            <div className={"chat-header-buttons chat-header-item"}>
                <MinimizeButton onTouchTap={props.onChatMinimize}/>
                <CloseButton onTouchTap={props.onChatClose}/>
            </div>
        </header>
    );
};

ChatHeader.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default ChatHeader;