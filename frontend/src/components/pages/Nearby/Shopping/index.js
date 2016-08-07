import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as shoppingActions from '../../../../actions/shoppingActions'
import Loading from '../../../common/Loading'
import ListingResourceCards from '../../../common/Cards/ListingResourceCards'
import Card from 'material-ui/Card'

require('./Shopping.scss');

class Shopping extends React.Component {
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
        actions.getAllShoppingResources().then(shoppingResources => {
            actions.setCurrentShoppingResource(shoppingResources.data[0]);
        });

    }

    render() {
        return this.props.shoppingResources.isFetching || this.state.isFirstRender ? <Loading /> : this.getShoppingContent();
    }

    getShoppingContent() {
        let {location, params, shoppingResources, children} = this.props;

        if (params.shoppingLocation) {
            return children;
        }

        return (

            <Card className={"content-container shopping-container"}>
                    <h2>Shopping Locations Nearby</h2>
                    <ListingResourceCards resources={shoppingResources.data} currentPath={location.pathname}/>
                </Card>


        );
    }
}

Shopping.propTypes = {
    // myProp: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
    let {shoppingResources} = state;
    return {
        shoppingResources
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        actions: bindActionCreators(shoppingActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shopping);