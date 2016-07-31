import React, {PropTypes} from 'react'
import NavBarSection from '../NavBarSection/NavBarSection'
import NavBarRight from '../NavBarRight/NavBarRight'

require('./NavBarRightSection.scss');

const NavBarRightSection = ({chats, notifications, chatsComponent}) => {
    return (
        <NavBarSection className={"navbar-section-right"}>
            <NavBarRight chatsComponent={chatsComponent} chats={chats} notifications={notifications} />
        </NavBarSection>
    );
};

NavBarRightSection.propTypes = {
    chats: PropTypes.object,
    notifications: PropTypes.object,
    chatsComponent: PropTypes.any
};

export default NavBarRightSection;