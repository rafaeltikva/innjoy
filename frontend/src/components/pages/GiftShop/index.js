import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Tab} from 'material-ui/Tabs'
import Card from 'material-ui/Card'
import TabBar from '../../common/TabBar'
import Loading from '../../common/Loading'
import NotFoundMessage from '../../common/NotFoundMessage'
import SideBar from '../../common/SideBar/SideBar'
import Content from '../../common/Content/Content'
import SlideShow from '../../common/SlideShow/SlideShow'
import InnerPage from '../../common/InnerPage/InnerPage'
import ListingResourceCards from '../../common/Cards/ListingResourceCards'
import * as giftShopActions from '../../../actions/giftShopActions'

class GiftShop extends React.Component {
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
        let includeResources = true;
        actions.getAllGiftShopCategories(includeResources).then(categories => {
            console.log('setting current category', categories.data[0]);
            actions.setCurrentGiftShopCategory(categories.data[0])
        });
    }

    render() {
        console.log('rendering GiftShop: ', this.props);
        let {hotelInfo, giftShopCategories} = this.props;
        let currentCategoryContent = (giftShopCategories.isFetching || this.state.isFirstRender) ?
            <Loading /> : this.getCurrentCategoryContent();
        return (
            <div id="gift-shop-page" className={"page"}>
                <SlideShow slideItems={hotelInfo.data.images}/>
                <InnerPage>
                    <SideBar sideBarData={hotelInfo.data.services}/>
                    <Content>
                        {currentCategoryContent}
                    </Content>
                </InnerPage>
            </div>
        );

    }

    getCurrentCategoryContent() {
        console.log('getting current gift shop category content: ', this.props);
        let {params, children, location, giftShopCategories} = this.props;

        if (giftShopCategories.error) {
            return <NotFoundMessage>{giftShopCategories.error}</NotFoundMessage>
        }

        if (params.item) {
            return children; // return child component - item page
        }

        return (
            <TabBar>
                {giftShopCategories.data.map(category => {
                    return (
                        <Tab key={category.id} className={"amenity-category"} label={category.title}>
                            <Card className={"content-container"}>
                                <ListingResourceCards className={"amenity-categories-container"}
                                                      resources={category.data}
                                                      currentPath={location.pathname}/>
                            </Card>
                        </Tab>
                    );
                })}
            </TabBar>
        );

    }
}

GiftShop.propTypes = {
    // myProp: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
    let {hotelInfo, giftShopCategories} = state;
    return {
        hotelInfo,
        giftShopCategories
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(giftShopActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GiftShop);