import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import SideBar from '../../common/SideBar/SideBar'
import Content from '../../common/Content/Content'
import SlideShow from '../../common/SlideShow/SlideShow'
import InnerPage from '../../common/InnerPage/InnerPage'
import NotFoundMessage from '../../common/NotFoundMessage'

class NotFound extends React.Component {
    render() {
        let {services, images} = this.props.hotelInfo.data;

        return (
            <div id="not-found-page" className={"page"}>
                <SlideShow slideItems={images}/>
                <InnerPage>
                    <SideBar sideBarData={services}/>
                    <Content>
                        <NotFoundMessage>{"Aw snap, Page not found :("}</NotFoundMessage>
                    </Content>
                </InnerPage>
            </div>
        );
    }
}

NotFound.propTypes = {
    //myProp: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
    let {hotelInfo} = state;
    return {
        hotelInfo
    };
}

export default connect(mapStateToProps)(NotFound);