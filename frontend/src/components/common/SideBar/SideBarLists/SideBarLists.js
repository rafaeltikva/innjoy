import React, {PropTypes} from 'react'
import OthersList from './OthersList'
import SideBarList from './SideBarList'

require('./SideBarLists.scss');

const SideBarLists = ({sideBarData}) => {

    let listData = [];
    let listIndex = 0;

    for (let item in sideBarData) {
        if (sideBarData.hasOwnProperty(item)) {
            console.log('adding ' + item + ' to sidebar');
            listData.push(<SideBarList key={listIndex} sideBarListData={sideBarData[item]} />);
        }
        listIndex++;
    }

    console.log('rendering sideBarLists: ', listData);
    return (
        <div className={"sidebar-lists"}>
            {listData}
            <OthersList />
        </div>
    );
};

SideBarLists.propTypes = {
    sideBarData: PropTypes.object.isRequired
};

export default SideBarLists;