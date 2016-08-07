import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as restaurantActions from '../../../../actions/restaurantActions'
import Loading from '../../../common/Loading'
import ListingResourceCards from '../../../common/Cards/ListingResourceCards'
import Card from 'material-ui/Card'

require('./Restaurants.scss');

class Restaurants extends React.Component {
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
        actions.getAllRestaurantResources().then(restaurants => {
            actions.setCurrentRestaurantResource(restaurants.data[0]);
        });

    }

    render() {
        return this.props.restaurants.isFetching || this.state.isFirstRender ? <Loading /> : this.getRestaurantsContent();
    }

    getRestaurantsContent() {
        let {location, params, restaurants, children} = this.props;

        if (params.restaurant) {
            return children;
        }

        return (

            <Card className={"content-container restaurants-container"}>
                    <h2>Restaurants Nearby</h2>
                    <ListingResourceCards resources={restaurants.data} currentPath={location.pathname}/>
                </Card>


        );
    }
}

Restaurants.propTypes = {
    // myProp: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
    let {restaurants, currentRestaurantResource} = state;
    return {
        restaurants
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        actions: bindActionCreators(restaurantActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants);