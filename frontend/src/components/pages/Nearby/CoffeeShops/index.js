import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as coffeeShopActions from '../../../../actions/coffeeShopActions'
import Loading from '../../../common/Loading'
import ListingResourceCards from '../../../common/Cards/ListingResourceCards'
import Card from 'material-ui/Card'

require('./CoffeeShops.scss');

class CoffeeShops extends React.Component {
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
        actions.getAllCoffeeShopResources().then(coffeeShops => {
            console.log('got the following coffee shops: ', coffeeShops);
            actions.setCurrentCoffeeShopResource(coffeeShops.data[0]);
        });

    }

    render() {
        return this.props.coffeeShops.isFetching || this.state.isFirstRender ? <Loading /> : this.getCoffeeShopsContent();
    }

    getCoffeeShopsContent() {
        let {location, params, coffeeShops, children} = this.props;

        if (params.coffeeShop) {
            return children;
        }

        return (

            <Card className={"content-container coffee-shops-container"}>
                    <h2>Coffee Shops Nearby</h2>
                    <ListingResourceCards resources={coffeeShops.data} currentPath={location.pathname}/>
                </Card>


        );
    }
}

CoffeeShops.propTypes = {
    // myProp: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
    let {coffeeShops} = state;
    return {
        coffeeShops
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        actions: bindActionCreators(coffeeShopActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoffeeShops);