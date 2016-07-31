import React, {PropTypes} from 'react'
import List from 'material-ui/List'
import SideBarItem from '../SideBarItem/SideBarItem'
import SideBarLink from '../SideBarLink/SideBarLink'
import SideBarListHeader from './SideBarListHeader'

require('./SideBarList.scss');

const SideBarList = ({sideBarListData}) => {
    console.log('rendering sideBarList ' + sideBarListData.title, sideBarListData.data);
    return (
        <List className={"sidebar-list"}>
            <SideBarItem><SideBarListHeader>{sideBarListData.title}</SideBarListHeader></SideBarItem>
            {sideBarListData.data.map((listItem) => {
                return <SideBarItem key={listItem.id}><SideBarLink to={`/${listItem.slug}`}>{listItem.title}</SideBarLink></SideBarItem>
            })}
        </List>
    );
};

SideBarList.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default SideBarList;