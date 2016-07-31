import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import SideBar from '../../common/SideBar/SideBar'
import Content from '../../common/Content/Content'
import SearchForm from '../../common/Search/SearchForm/SearchForm'
import SlideShow from '../../common/SlideShow/SlideShow'
import InnerPage from '../../common/InnerPage/InnerPage'
import Greeting from '../../common/Greeting/Greeting'
import * as hotelActions from '../../../actions/hotelActions'

require('./Home.scss');

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        console.log("Props in home: ", this.props);
        let {services, options, images} = this.props.hotelInfo.data;

        return (
            <div id="home-page" className={"page"}>
                <SlideShow slideItems={images} />
                <InnerPage>
                    <SideBar sideBarData={services}/>
                    <Content>
                        <Greeting message={options.greeting} />
                        <SearchForm />
                    </Content>
                </InnerPage>
            </div>
        );

    }
}

Home.propTypes = {
    hotelInfo: PropTypes.object.isRequired,
    userInfo: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    console.log('mapping state to props in Home', state);
    let {hotelInfo, userInfo} = state;
    return {
        hotelInfo,
        userInfo
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(hotelActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);