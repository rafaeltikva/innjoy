import React, {PropTypes} from 'react'
import ListItem from 'material-ui/List/ListItem'

require('./SideBarItem.scss');

const SideBarItem = ({children, className, style}) => {
    return (
        <ListItem className={"sidebar-item " + className} style={style}>{children}</ListItem>
    );
};

SideBarItem.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default SideBarItem;