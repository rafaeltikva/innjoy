import React, {PropTypes} from 'react'
import CloseButton from '../Button/CloseButton'

require('./ChatGreeting.scss');

const ChatGreeting = (props) => {
    return (
        <div className={"chat-greeting-container"} style={{display: props.showGreeting ? 'block' : 'none'}}>
            <span className={"chat-greeting"}>Hey Rafael, I'm here if you need anything</span>
            <CloseButton onTouchTap={props.onClose}/>
        </div>
    );
};

ChatGreeting.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default ChatGreeting;