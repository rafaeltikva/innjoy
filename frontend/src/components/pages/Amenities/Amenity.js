import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import PageResourceCard from '../../common/Cards/PageResourceCard'
import Loading from '../../common/Loading'
import NotFoundMessage from '../../common/NotFoundMessage'
import * as amenitiesActions from '../../../actions/amenitiesActions'
import {getAmenityFromStore} from '../../../tools/amenityUtils'

class Amenity extends React.Component {
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
        let {params, actions, currentAmenity} = this.props;
        let amenityResourceSlug = params.amenityResource ? params.amenityResource : params.amenity;
        actions.getAmenityResourceBySlug(amenityResourceSlug).then(amenityResource => {
            return actions.setCurrentAmenityResource(amenityResource);
        });

    }

    render() {
        let {currentAmenity} = this.props;
        console.log('rendering Amenity', this.props);

        if (currentAmenity.error) {
            return <NotFoundMessage>{currentAmenity.error}</NotFoundMessage>
        }

        return (
            currentAmenity.isFetching || this.state.isFirstRender ? <Loading /> : this.getCurrentAmenityContent()
        );
    }


    getCurrentAmenityContent() {
        console.log('getting current amenity content: ', this.props);
        let { currentAmenity} = this.props;

        if (currentAmenity.error) {
            return <NotFoundMessage>{this.props.currentAmenity.error}</NotFoundMessage>;
        }

        return <PageResourceCard callToAction={"Book Now"} resource={currentAmenity}/>;
    }
}

Amenity.propTypes = {
    //myProp: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
    let {amenities, currentAmenity} = state;
    return {
        currentAmenity
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(amenitiesActions, dispatch)
    };

}

export default connect(mapStateToProps, mapDispatchToProps)(Amenity);