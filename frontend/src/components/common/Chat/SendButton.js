import React, {PropTypes} from 'react'
import IconButton from 'material-ui/IconButton'
import ContentSend from 'material-ui/svg-icons/content/send'

require('./SendButton.scss');

class SendButton extends React.Component {
    render() {
        return (
            <IconButton className={"send-button"}>
                <ContentSend />
            </IconButton>
        );
    }
}

SendButton.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default SendButton;