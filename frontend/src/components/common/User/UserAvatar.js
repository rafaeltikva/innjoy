import React, {PropTypes} from 'react'
import Avatar from 'material-ui/Avatar'

require('./UserAvatar.scss');

class UserAvatar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            src: this.props.src ? this.props.src : "/img/Avatar.png"
        }

    }

    render() {
        return (
            <Avatar className={"user-avatar"} src={this.state.src} size={this.props.size}/>
        );
    }
}

UserAvatar.defaultProps = {
    src: "/img/Avatar.png"
};

UserAvatar.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default UserAvatar;