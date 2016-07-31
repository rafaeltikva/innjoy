import React, {PropTypes} from 'react'
import List from 'material-ui/List'
import SideBarItem from '../SideBarItem/SideBarItem'
import SideBarLink from '../SideBarLink/SideBarLink'

require('./OthersList.scss');

const NearbyList = (props) => {
    return (
        <List className={"sidebar-list others-list"}>
            <SideBarItem><SideBarLink to="/feedback" style={{fontWeight: "bold"}}>Leave Feedback</SideBarLink></SideBarItem>
            <SideBarItem style={{margin: "10px 0", border: "1px solid #fff"}}><SideBarLink to="/checkout">Check Out</SideBarLink></SideBarItem>
        </List>

    );
};

NearbyList.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default NearbyList;