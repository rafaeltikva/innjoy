import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Card from 'material-ui/Card'
import * as shoppingActions from '../../../../actions/shoppingActions'
import Loading from '../../../common/Loading'
import PageResourceCard from '../../../common/Cards/PageResourceCard'
import NotFoundMessage from '../../../common/NotFoundMessage'

class ShoppingResource extends React.Component {
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
        actions.getShoppingResourceBySlug(params.shoppingLocation).then(shoppingResource => {
            actions.setCurrentShoppingResource(shoppingResource);
        });

    }

    render() {

        let { currentShoppingResource} = this.props;

        if (currentShoppingResource.error) {
            return <NotFoundMessage>{currentShoppingResource.error}</NotFoundMessage>;
        }

        return (!currentShoppingResource.isInit || this.state.isFirstRender) ? <Loading /> : this.getGiftShopItemContent();
    }

    getGiftShopItemContent() {
        let { currentShoppingResource} = this.props;
        return <PageResourceCard callToAction={"Leave a Review"} resource={currentShoppingResource} />;
    }
}

ShoppingResource.propTypes = {
    // myProp: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
    let {currentShoppingResource} = state;
    return {
        currentShoppingResource
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        actions: bindActionCreators(shoppingActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingResource);