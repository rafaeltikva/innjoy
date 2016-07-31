import React, {PropTypes} from 'react'
import IconButton from 'material-ui/IconButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close'

require('./CloseButton.scss');

class CloseButton extends React.Component {
    render() {
        return (
            <IconButton {...this.props} className={"close-button"} style={{height: 24, width: 24}}>
                <NavigationClose />
            </IconButton>
        );
    }
}

CloseButton.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default CloseButton;