import React, {PropTypes} from 'react'
import {Tabs} from 'material-ui/Tabs'

const TabBar = ({children}) => {
    return (
        <Tabs contentContainerStyle={{marginTop: '24px'}} inkBarStyle={{backgroundColor: '#BAA58C'}} className={"tab-bar"}>{children}</Tabs>
    );
};

TabBar.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default TabBar;