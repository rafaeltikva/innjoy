import React, {PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import SideBar from '../../common/SideBar/SideBar'
import Content from '../../common/Content/Content'
import SlideShow from '../../common/SlideShow/SlideShow'
import InnerPage from '../../common/InnerPage/InnerPage'
import Loading from '../../common/Loading'
import GridResourceCards from '../../common/Cards/GridResourceCards'
import * as amenitiesActions from '../../../actions/amenitiesActions'
import {isResourceType, isRoot} from '../../../tools/helpers'


class Amenities extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isFirstRender: true
        }
    }

    componentDidMount() {
        this.setState({
            isFirstRender: false
        });
    }

    componentWillMount() {
        let {actions} = this.props;
        actions.getRootAmenities();
    }

    render() {
        let {amenities, hotelInfo} = this.props;
        let amenitiesContent = amenities.isFetching || this.state.isFirstRender ? <Loading /> : this.getAmenitiesContent();

        console.log('rendering amenities page: ', amenities);
        return (
            <div id="amenities-page" className={"page"}>
                <SlideShow slideItems={hotelInfo.data.images}/>
                <InnerPage>
                    <SideBar sideBarData={hotelInfo.data.services}/>
                    <Content>
                        {amenitiesContent}
                    </Content>
                </InnerPage>
            </div>
        );
    }

    getAmenitiesContent() {
        let {params, amenities, location, amenityComponent, amenityCategoriesComponent} = this.props;
        console.log('this.props in Amenities: ', this.props);

        if (params.amenityResource) {
            return amenityComponent;
        }
        if (params.amenity) {
            return isResourceType(params.amenity, amenities.data) && isRoot(params.amenity, amenities.data) ? amenityComponent : amenityCategoriesComponent;
        }

        return <GridResourceCards resources={amenities.data} currentPath={location.pathname}/>

    }
}

Amenities.propTypes = {
    //myProp: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
    let {hotelInfo, amenities} = state;
    return {
        hotelInfo,
        amenities
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(amenitiesActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Amenities);