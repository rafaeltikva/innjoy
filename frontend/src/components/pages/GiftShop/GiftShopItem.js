import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class GiftShopItem extends React.Component {
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

    render() {
        let {currentAmenity} = this.props;
        console.log('rendering Amenity', currentAmenity);
        console.log('this.props in amenity: ', this.props);
        console.log('location in Amenity: ', this.props.location);
        return (
            currentAmenity.isFetching || this.state.isFirstRender ? <Loading /> : this.getCurrentAmenityContent()
        );
    }


    getCurrentAmenityContent() {
        let { currentAmenity} = this.props;

        if (currentAmenity.error) {
            return <NotFound>{this.props.currentAmenity.error}</NotFound>;
        }

        return <PageResourceCard resource={currentAmenity}/>;
    }

    initializeCurrentAmenity() {
        let { currentAmenity, amenities, params, actions} = this.props;
        console.log('Amenity will mount', this.props.currentAmenity);

        if (!currentAmenity.id) {
            console.log('Getting current amenity from server: ', resourceSlug);
            return actions.getCurrentAmenity(resourceSlug);
        }
        if (resourceSlug !== currentAmenity.slug) {
            console.log('looking for amenity in redux store...');
            // find amenity in redux store. if not found, dispatch getCurrentAmenity to query amenity in server
            let amenityFromStore = getAmenityFromStore(resourceSlug, amenities.data);

            if (amenityFromStore) {
                console.log('the amenity from redux store: ', amenityFromStore);
                return actions.setCurrentAmenity(amenityFromStore);
            }
            // amenity not in store, fetch from server (if exists)
            console.log('Amenity not in store...getting current amenity from server', resourceSlug);
            actions.getCurrentAmenity(resourceSlug);
        }
    }
}

GiftShopItem.propTypes = {
    // myProp: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        state: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GiftShopItem);