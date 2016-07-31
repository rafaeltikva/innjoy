import React, {PropTypes} from 'react'
import Weather from '../Weather/Weather';
import SideBarLists from './SideBarLists/SideBarLists'

require('./SideBar.scss');

const SideBar = ({sideBarData}) => {
    console.log('rendering SideBar: ', sideBarData);
    return (
        <aside className={"sidebar sidebar-hotel"}>
            <Weather />
            <SideBarLists sideBarData={sideBarData} />
        </aside>

    );

};

SideBar.propTypes = {
    sideBarData: PropTypes.object
};

export default SideBar;