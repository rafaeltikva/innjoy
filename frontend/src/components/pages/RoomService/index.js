import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import SideBar from '../../common/SideBar/SideBar'
import Content from '../../common/Content/Content'
import SlideShow from '../../common/SlideShow/SlideShow'
import InnerPage from '../../common/InnerPage/InnerPage'
import ComingSoonMessage from '../../common/ComingSoonMessage'

const RoomService = ({hotelInfo}) => {
    console.log('rendering RoomService Page');
    return (
        <div id="room-service-page" className={"page"}>
                <SlideShow slideItems={hotelInfo.data.images}/>
                <InnerPage>
                    <SideBar sideBarData={hotelInfo.data.services}/>
                    <Content>
                        <ComingSoonMessage />
                    </Content>
                </InnerPage>
            </div>
    );
};

RoomService.propTypes = {
    //myProp: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
    let {hotelInfo} = state;
    return {
        hotelInfo
    };
}


export default connect(mapStateToProps)(RoomService);