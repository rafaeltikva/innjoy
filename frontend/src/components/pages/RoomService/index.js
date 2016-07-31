import React, {PropTypes} from 'react'
import SideBar from '../../common/SideBar/SideBar'
import Content from '../../common/Content/Content'
import SlideShow from '../../common/SlideShow/SlideShow'
import InnerPage from '../../common/InnerPage/InnerPage'

const RoomService = (props) => {
    return (
        <div id="room-service-page" className={"page"}>
                <SlideShow />
                <InnerPage>
                    <SideBar />
                    <Content>
                        <h1>Room Service</h1>
                    </Content>
                </InnerPage>
        </div>
    );
};

RoomService.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default RoomService;