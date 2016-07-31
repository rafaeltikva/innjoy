import React, {PropTypes} from 'react'
import IconButton from 'material-ui/IconButton'
import ContentRemove from 'material-ui/svg-icons/content/remove'

require('./MinimizeButton.scss');

class MinimizeButton extends React.Component {
    render() {
        return (
            <IconButton {...this.props} className={"minimize-button"} style={{height: 24, width: 24}}>
                <ContentRemove />
            </IconButton>
        );
    }
}

MinimizeButton.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default MinimizeButton;