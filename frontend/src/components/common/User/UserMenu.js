import React, {PropTypes} from 'react'
import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'
import UserAvatar from './UserAvatar'

require('./UserMenu.scss');

const UserMenu = (props) => {
    return (
        <div className={"nav-menu user-menu"}>
            <IconMenu anchorOrigin={{vertical: 'bottom', horizontal: 'left'}} iconButtonElement={<IconButton className={"nav-button user-button"}><UserAvatar size={32} /></IconButton>}>
                <MenuItem value={"profile"}>Profile</MenuItem>
                <MenuItem value={"payment_settings"}>Payment Settings</MenuItem>
                <MenuItem value={"bookings"}>Bookings</MenuItem>
                <MenuItem value={"favourites"}>Favourites</MenuItem>
                <Divider />
                <MenuItem value={"sign_out"}>Sign Out</MenuItem>
            </IconMenu>
            <span className={"user-text"}>Rafael</span>
        </div>
    );
};

UserMenu.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default UserMenu;