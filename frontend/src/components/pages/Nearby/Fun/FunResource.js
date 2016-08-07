import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Card from 'material-ui/Card'
import * as funActions from '../../../../actions/funActions'
import Loading from '../../../common/Loading'
import PageResourceCard from '../../../common/Cards/PageResourceCard'
import NotFoundMessage from '../../../common/NotFoundMessage'

class FunResource extends React.Component {
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
        actions.getFunResourceBySlug(params.funActivity).then(funActivity => {
            actions.setCurrentFunResource(funActivity);
        });

    }

    render() {

        let { currentFunResource} = this.props;

        if (currentFunResource.error) {
            return <NotFoundMessage>{currentFunResource.error}</NotFoundMessage>;
        }

        return (!currentFunResource.isInit || this.state.isFirstRender) ? <Loading /> : this.getGiftShopItemContent();
    }

    getGiftShopItemContent() {
        let { currentFunResource} = this.props;
        return <PageResourceCard callToAction={"Order Now"} resource={currentFunResource} />;
    }
}

FunResource.propTypes = {
    // myProp: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
    let {currentFunResource} = state;
    return {
        currentFunResource
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        actions: bindActionCreators(funActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FunResource);