import React, {PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Tab} from 'material-ui/Tabs'
import TabBar from '../../common/TabBar/index'
import Loading from '../../common/Loading'
import GridResourceCards from '../../common/Cards/GridResourceCards'
import * as amenitiesActions from '../../../actions/amenitiesActions'
import {getAmenityFromStore, getCategoriesOfAmenity, getCategoryFromStore } from '../../../tools/amenityUtils'
import {promiseReject} from '../../../tools/helpers'


/*
 - get current amenity
 - get categories pointing to current amenity
 - set first category as currentAmenityCategory
 - add currentAmenityCategory to store
 - add currentAmenityCategory reducer
 - add currentAmenityCategory actions & action types
 - add currentAmenityCategory api

 - get amenities pointing to selected category
 - add onClick handler on Tabs to get amenities pointing to selected category

 */
class AmenityCategories extends React.Component {
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
        this.initializeCurrentAmenity();
    }

    componentWillReceiveProps(nextProps) {
        console.log('AmenityCategories received new props: ', nextProps);
        if (this.props.currentAmenity.id !== nextProps.currentAmenity.id) {
            console.log('getting amenity categories of: ', nextProps.currentAmenity);
            this.props.actions.getCategoriesOfAmenity(nextProps.currentAmenity.id).then(categories => {
                console.log('got amenity categories: ', categories);
                return this.props.actions.setCurrentAmenityCategory(categories.data[0], true);
            });
        }
    }

    render() {
        console.log('rendering AmenityCategories', this.props);
        let {amenities, currentAmenity, amenityCategories, currentAmenityCategory} = this.props;
        let amenityContent = (currentAmenity.isFetching || amenityCategories.isFetching || currentAmenityCategory.isFetching || this.state.isFirstRender ) ?
            <Loading /> : this.getCurrentCategoryAmenitiesContent();
        return amenityContent;

    }

    getCurrentCategoryAmenitiesContent() {
        console.log('getting current category amenities content: ', this.props);
        let { amenities, amenityCategories, currentAmenityCategory, location} = this.props;
        return (
            <TabBar>
                {amenityCategories.data.map(category => {
                    return (
                        <Tab key={category.id} className={"amenity-category"} label={category.title}>
                            <GridResourceCards className={"amenity-categories-container"}
                                                    resources={currentAmenityCategory.data}
                                                    currentPath={location.pathname}/>
                        </Tab>
                    );
                })}
            </TabBar>
        );

    }

    initializeCurrentAmenity() {
        let {amenities, category, currentAmenity, currentAmenityCategory, params, actions} = this.props;
        console.log('AmenityCategories will mount with props:', this.props);

        if (!currentAmenity.id) {
            console.log('No current amenity. Getting current amenity from server: ', params.amenity);
            return actions.getCurrentAmenity(params.amenity);
        }
        if (params.amenity !== currentAmenity.slug) {
            console.log('looking for amenity in redux store...');
            // find amenity in redux store. if not found, dispatch getCurrentAmenity to query amenity in server
            let amenityFromStore = getAmenityFromStore(params.amenity, amenities.data);

            if (amenityFromStore) {
                console.log('the amenity from redux store: ', amenityFromStore);
                return actions.setCurrentAmenity(amenityFromStore); // set current amenity from redux store, thereby saving a server request
            }
            // amenity not in store, fetch from server (if exists)
                console.log('Amenity not in store...getting current amenity from server', params.amenity);
                actions.getCurrentAmenity(params.amenity);
        }

    }
}

AmenityCategories.propTypes = {
    //myProp: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
    let {amenities, currentAmenity, amenityCategories, currentAmenityCategory} = state;
    return {
        amenities,
        currentAmenity,
        amenityCategories,
        currentAmenityCategory
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(amenitiesActions, dispatch)
    };

}

export default connect(mapStateToProps, mapDispatchToProps)(AmenityCategories);