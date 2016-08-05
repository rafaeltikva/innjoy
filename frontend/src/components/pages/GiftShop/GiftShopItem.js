import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Loading from '../../common/Loading'
import NotFoundMessage from '../../common/NotFoundMessage'
import PageResourceCard from '../../common/Cards/PageResourceCard'
import * as giftShopActions from '../../../actions/giftShopActions'

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
        let {actions, params} = this.props;
        actions.getGiftShopResourceBySlug(params.item).then(giftShopItem => {
            actions.setCurrentGiftShopResource(giftShopItem);
        });
    }

    render() {

        let { currentGiftShopResource} = this.props;

        if (currentGiftShopResource.error) {
            return <NotFoundMessage>{currentGiftShopResource.error}</NotFoundMessage>;
        }

        return (!currentGiftShopResource.isInit || this.state.isFirstRender) ? <Loading /> : this.getGiftShopItemContent();
    }

    getGiftShopItemContent() {
        let { currentGiftShopResource} = this.props;
        return <PageResourceCard callToAction={"Add to Cart"} resource={currentGiftShopResource} />;
    }

}

GiftShopItem.propTypes = {
    // myProp: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
    let {currentGiftShopResource} = state;
    return {
        currentGiftShopResource
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(giftShopActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GiftShopItem);