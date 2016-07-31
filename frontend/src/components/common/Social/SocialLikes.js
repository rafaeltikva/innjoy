import React, {PropTypes} from 'react'
import IconButton from 'material-ui/IconButton'
import UserAvatar from '../User/UserAvatar/UserAvatar'

require('./SocialLikes.scss');

class SocialLikes extends React.Component {
    render() {
        let {users} = this.props;
        return (
            <div className={"social-likes"}>
                <span>{users.length} People Like This:</span>

                <div className={"social-avatars"}>
                    {users.map((user, index) => {
                        return (
                            <IconButton key={index} tooltip={user.fullName} tooltipPosition={"top-center"}
                                        style={{height: "30px", width: "30px", padding: 0}}>
                                <UserAvatar size={30}/>
                            </IconButton>
                        );
                    })}
                </div>
            </div>
        );
    }
}

SocialLikes.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default SocialLikes;