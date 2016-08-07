import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Loading from '../../common/Loading'
import NotFoundMessage from '../../common/NotFoundMessage'
import SideBar from '../../common/SideBar/SideBar'
import Content from '../../common/Content/Content'
import SlideShow from '../../common/SlideShow/SlideShow'
import InnerPage from '../../common/InnerPage/InnerPage'

class Nearby extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        let {hotelInfo, children} = this.props;
        console.log('rendering Nearby');
        return (
            <div id="nearby-page" className={"page"}>
                <SlideShow slideItems={hotelInfo.data.images}/>
                <InnerPage>
                    <SideBar sideBarData={hotelInfo.data.services}/>
                    <Content>
                        {children}
                    </Content>
                </InnerPage>
            </div>
        );
    }
}

Nearby.propTypes = {
    // myProp: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        hotelInfo: state.hotelInfo
    };
}


export default connect(mapStateToProps)(Nearby);