import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as searchActions from '../../../actions/searchActions'
import ListingResourceCards from '../../common/Cards/ListingResourceCards'
import Loading from '../../common/Loading'
import SideBar from '../../common/SideBar/SideBar'
import Content from '../../common/Content/Content'
import SlideShow from '../../common/SlideShow/SlideShow'
import InnerPage from '../../common/InnerPage/InnerPage'
import NotFoundMessage from '../../common/NotFoundMessage'

class SearchResults extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchResults: {},
            isFirstRender: true
        }
    }

    componentDidMount() {
        this.setState({
            isFirstRender: false
        });
    }


    componentWillMount() {
        let {actions, location} = this.props;
        console.log('SearchResults component will mount: ', this.props);
        actions.searchForResources(location.query.q).then(searchResults => {
            console.log('setting search results state: ', searchResults);
            this.setState({searchResults});
        }, searchFailedResults => {
            console.log('Setting search results failed: ', searchFailedResults);
            this.setState({searchResults: searchFailedResults});
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.location.query.q !== this.props.location.query.q) {
            this.props.actions.searchForResources(nextProps.location.query.q).then(searchResults => {
                console.log('setting search results state: ', searchResults);
                this.setState({searchResults});
            }, searchFailedResults => {
                console.log('Setting search results failed: ', searchFailedResults);
                this.setState({searchResults: searchFailedResults});
            });
        }
    }

    render() {
        console.log('rendering SearchResults', this.props);
        let {hotelInfo, search} = this.props;

        let searchResultsContent = search.isSearching || this.state.isFirstRender ?
            <Loading /> : this.prepareSearchResultsContent();

        return (
            <div id="search-results-page" className={"page"}>
                <SlideShow slideItems={hotelInfo.data.images}/>
                <InnerPage>
                    <SideBar sideBarData={hotelInfo.data.services}/>
                    <Content>
                        {searchResultsContent}
                    </Content>
                </InnerPage>
            </div>
        );
    }

    prepareSearchResultsContent() {

        if (this.state.searchResults.error) {
            return <NotFoundMessage>{this.state.searchResults.error}</NotFoundMessage>;
        }

        return (
            <div className={"search-results-container"}>
                <div className={"search-result-result"}>{this.state.searchResults.textResponse}</div>
                {this.state.searchResults.numOfResults > 0 ?
                    <ListingResourceCards className={"search-results"}
                                          resources={this.state.searchResults.data}
                                          currentPath={this.props.location.pathname}/>
                    : null}
            </div>
        );

    }
}

SearchResults.propTypes = {
    //myProp: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
    let {hotelInfo, search} = state;
    return {
        hotelInfo, search
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(searchActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);