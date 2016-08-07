import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Card from 'material-ui/Card'
import * as restaurantActions from '../../../../actions/restaurantActions'
import Loading from '../../../common/Loading'
import PageResourceCard from '../../../common/Cards/PageResourceCard'
import NotFoundMessage from '../../../common/NotFoundMessage'

class Restaurant extends React.Component {
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
        let {actions, params} = this.props;
        actions.getRestaurantResourceBySlug(params.restaurant).then(restaurant => {
            actions.setCurrentRestaurantResource(restaurant);
        });

    }

    render() {

        let { currentRestaurantResource} = this.props;

        if (currentRestaurantResource.error) {
            return <NotFoundMessage>{currentRestaurantResource.error}</NotFoundMessage>;
        }

        return (!currentRestaurantResource.isInit || this.state.isFirstRender) ? <Loading /> : this.getGiftShopItemContent();
    }

    getGiftShopItemContent() {
        let { currentRestaurantResource} = this.props;
        return <PageResourceCard callToAction={"Order Now"} resource={currentRestaurantResource} />;
    }
}

Restaurant.propTypes = {
    // myProp: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
    let {currentRestaurantResource} = state;
    return {
        currentRestaurantResource
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        actions: bindActionCreators(restaurantActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);