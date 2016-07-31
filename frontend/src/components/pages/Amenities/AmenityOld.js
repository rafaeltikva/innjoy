import React, {PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import $ from 'jquery'
import SideBar from '../../common/SideBar/SideBar'
import Content from '../../common/Content/Content'
import Loading from '../../common/Loading'
import SlideShow from '../../common/SlideShow/SlideShow'
import InnerPage from '../../common/InnerPage/InnerPage'
import NotFound from '../../common/NotFound'
import AmenityCategories from './AmenityCategories'
import AmenitySingle from './AmenitySingle'
import * as amenitiesActions from '../../../actions/amenitiesActions'

class Amenity extends React.Component {

    constructor(props, context) {
        super(props);

        console.log('this.props in Amenity: ', this.props);
        console.log('all the amenities:', this.props.amenities);
        console.log('The current amenity:', this.props.currentAmenity);
    }

    componentWillMount() {
        let {amenities, currentAmenity, params, actions} = this.props;
        console.log('Amenity will mount', this.props.currentAmenity);

        if (this.props.params.amenity !== this.props.currentAmenity.slug) {
            if (amenities.data.length) {
                console.log('looking for amenity in redux store...');
                // find amenity in redux store. if not found, dispatch getCurrentAmenity to query amenity in server
                let amenityFromStore = this.getCurrentAmenityFromStore(amenity.slug, amenities.data);

                console.log('the amenity from redux store: ', amenityFromStore);
                amenityFromStore ? actions.setCurrentAmenity(amenityFromStore) : actions.getCurrentAmenity(params.amenity);
            }
            else {
                console.log('no amenities in redux store...querying server');
                // if redux store is empty (user opened amenity page directly), dispatch getCurrentAmenity to get the amenity
                actions.getCurrentAmenity(params.amenity);
            }
        }

    }

    componentDidMount() {
        $('html, body').animate({
            scrollTop: $(this.pageElement).offset().top
        }, 1000);
        //this.pageElement.scrollIntoView();
        //window.scroll(0, this.pageElement.offsetTop);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Amenity updated. Old props:', prevProps);
        console.log('New props:', this.props);
        //this.pageElement.scrollIntoView();
        $('html, body').animate({
            scrollTop: $(this.pageElement).offset().top
        }, 1000);

    }
    
    getAmenityFromStore(slug, amenitiesList) {
        return amenitiesList.find(amenity => amenity.slug === slug); // get current amenity object
    }

    getCurrentAmenityContent() {
        if (this.props.currentAmenity.error) {
            return <NotFound>{this.props.currentAmenity.error}</NotFound>;
        }
        else if (this.props.currentAmenity.categories && !this.props.params.resource) { // check if not pointing to specific amenity page
            return (
                <AmenityCategories categories={this.props.currentAmenity.categories.data} currentPath={this.props.location.pathname} />
            );
        }
        else {

            console.log('the child amenity route component: ', this.props.children);

            let {params, currentAmenity, actions} = this.props;

            //return <AmenitySingle />;
            return this.props.children; // return the child route component
        }
    }

    render() {
        let {children, params, amenities, currentAmenity, hotelInfo} = this.props;

        console.log('rendering Amenity', this.props);
        console.log('the context: ', this.context);

        let amenityContent = this.getCurrentAmenityContent();

        return (

            <div id="amenity-page" ref={(element) => this.pageElement = element}>
                <SlideShow slideItems={hotelInfo.data.images}/>
                <InnerPage>
                    <SideBar sideBarData={hotelInfo.data.services}/>
                    <Content>
                        {amenityContent}
                        <h1>{this.props.params.amenity}</h1>
                    </Content>
                </InnerPage>
            </div>
        );
    }
}

Amenity.propTypes = {
    //myProp: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
    let {hotelInfo, amenities, currentAmenity} = state;
    return {
        hotelInfo,
        amenities,
        currentAmenity
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(amenitiesActions, dispatch)
    };

}

export default connect(mapStateToProps, mapDispatchToProps)(Amenity);