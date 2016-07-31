import React, {PropTypes} from 'react'
import SendButton from './SendButton'

require('./ChatInput.scss');

const ChatInput = (props) => {
    return (
        <div className={"chat-input-container"}>
            <textarea className={"chat-input"} placeholder={"Enter text here..."}/>
            <SendButton />

        </div>
    );
};

ChatInput.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default ChatInput;