import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as funActions from '../../../../actions/funActions'
import Loading from '../../../common/Loading'
import ListingResourceCards from '../../../common/Cards/ListingResourceCards'
import Card from 'material-ui/Card'

require('./Fun.scss');

class Fun extends React.Component {
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
        actions.getAllFunResources().then(funResources => {
            console.log('got the following fun resources: ', funResources);
            actions.setCurrentFunResource(funResources.data[0]);
        });

    }

    render() {
        return this.props.funResources.isFetching || this.state.isFirstRender ? <Loading /> : this.getFunContent();
    }

    getFunContent() {
        let {location, params, funResources, children} = this.props;

        if (params.funActivity) {
            return children;
        }

        return (

            <Card className={"content-container coffee-shops-container"}>
                    <h2>Fun Activities Nearby</h2>
                    <ListingResourceCards resources={funResources.data} currentPath={location.pathname}/>
                </Card>


        );
    }
}

Fun.propTypes = {
    // myProp: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
    let {funResources} = state;
    return {
        funResources
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        actions: bindActionCreators(funActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Fun);