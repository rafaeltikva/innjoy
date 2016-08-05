import React, {PropTypes} from 'react'
import Avatar from 'material-ui/Avatar'

require('./UserAvatar.scss');

class UserAvatar extends React.Component {

    render() {
        let {size} = this.props;
        return (
            <Avatar className={"user-avatar"} src={"/img/Avatar.png"} size={size}/>
        );
    }
}

UserAvatar.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default UserAvatar;