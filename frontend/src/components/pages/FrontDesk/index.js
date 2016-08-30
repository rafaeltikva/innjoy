import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import SideBar from '../../common/SideBar/SideBar'
import Content from '../../common/Content/Content'
import SlideShow from '../../common/SlideShow/SlideShow'
import InnerPage from '../../common/InnerPage/InnerPage'
import ComingSoonMessage from '../../common/ComingSoonMessage'

const FrontDesk = ({hotelInfo}) => {
    console.log('rendering FrontDesk Page');
    return (
        <div id="front-desk-page" className={"page"}>
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

FrontDesk.propTypes = {
    //myProp: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
    let {hotelInfo} = state;
    return {
        hotelInfo
    };
}


export default connect(mapStateToProps)(FrontDesk);