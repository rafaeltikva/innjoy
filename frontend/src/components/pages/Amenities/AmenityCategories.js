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
        //this.initializeCurrentAmenity();
        let {actions, params, currentAmenityCategory} = this.props;

        actions.getAmenityCategoryBySlug(params.amenity).then(category => {
            let includeResources = true;
            return actions.getAmenityCategoriesOfParent(category.id, includeResources);
        }).then(categories => {
            actions.setCurrentAmenityCategory(categories.data[0]);
        });
    }

    render() {
        console.log('rendering AmenityCategories', this.props);
        let {amenityCategories, currentAmenityCategory} = this.props;
        let amenityContent = (amenityCategories.isFetching || !currentAmenityCategory.isInit || this.state.isFirstRender ) ?
            <Loading /> : this.getCurrentCategoryAmenitiesContent();
        return amenityContent;

    }

    getCurrentCategoryAmenitiesContent() {
        console.log('getting current category amenities content: ', this.props);
        let { amenityCategories, location} = this.props;
        return (
            <TabBar>
                {amenityCategories.data.map(amenityCategory => {
                    return (
                        <Tab key={amenityCategory.id} className={"amenity-category"} label={amenityCategory.title}>
                            <GridResourceCards className={"amenity-categories-container"}
                                               resources={amenityCategory.data}
                                               currentPath={location.pathname}/>
                        </Tab>
                    );
                })}
            </TabBar>
        );

    }
}

AmenityCategories.propTypes = {
    //myProp: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
    let {amenityCategories, currentAmenityCategory} = state;
    return {
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