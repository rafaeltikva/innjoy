import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Card from 'material-ui/Card'
import * as coffeeShopActions from '../../../../actions/coffeeShopActions'
import Loading from '../../../common/Loading'
import PageResourceCard from '../../../common/Cards/PageResourceCard'
import NotFoundMessage from '../../../common/NotFoundMessage'

class CoffeeShop extends React.Component {
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
        actions.getCoffeeShopResourceBySlug(params.coffeeShop).then(coffeeShop => {
            actions.setCurrentCoffeeShopResource(coffeeShop);
        });

    }

    render() {

        let { currentCoffeeShopResource} = this.props;

        if (currentCoffeeShopResource.error) {
            return <NotFoundMessage>{currentCoffeeShopResource.error}</NotFoundMessage>;
        }

        return (!currentCoffeeShopResource.isInit || this.state.isFirstRender) ? <Loading /> : this.getGiftShopItemContent();
    }

    getGiftShopItemContent() {
        let { currentCoffeeShopResource} = this.props;
        return <PageResourceCard callToAction={"Order Now"} resource={currentCoffeeShopResource} />;
    }
}

CoffeeShop.propTypes = {
    // myProp: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
    let {currentCoffeeShopResource} = state;
    return {
        currentCoffeeShopResource
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        actions: bindActionCreators(coffeeShopActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoffeeShop);