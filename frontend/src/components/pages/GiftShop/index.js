import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Tab} from 'material-ui/Tabs'
import TabBar from '../../common/TabBar'
import Loading from '../../common/Loading'
import NotFound from '../../common/NotFound'
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
            isFirstRender: true,
            counter: 0
        }
    }

    componentDidMount() {
        this.setState({
            isFirstRender: false
        });
    }

    componentWillMount() {
        let {actions, currentGiftShopCategory, giftShopCategories} = this.props;
        if (!currentGiftShopCategory.id) {
            actions.getAllGiftShopCategories().then(categories => {
                console.log('setting current category', categories.data[0]);
                actions.setCurrentGiftShopCategory(categories.data[0], true)
            });
        }
    }

    componentWillReceiveProps(nextProps) {
        /*
        console.log('GiftShop receiving new props: ', nextProps);
        if (nextProps.giftShopCategories.data.length > this.props.giftShopCategories.data.length && !nextProps.currentGiftShopCategory.id) {
            //this.props.actions.setCurrentGiftShopCategory(nextProps.giftShopCategories.data[0], true);
        }
        */
    }

    render() {
        console.log('rendering GiftShop: ', this.props);
        let {hotelInfo, giftShopCategories, currentGiftShopCategory, currentGiftShopCategoryResources} = this.props;
        let currentCategoryContent = (giftShopCategories.isFetching || currentGiftShopCategoryResources.isFetching || currentGiftShopCategory.isFetching || this.state.isFirstRender) ?
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
        let {location, giftShopCategories, currentGiftShopCategory, currentGiftShopCategoryResources} = this.props;

        if (currentGiftShopCategory.error) {
            return <NotFound>{currentGiftShopCategory.error}</NotFound>
        }

        return (
            <TabBar>
                {giftShopCategories.data.map(category => {
                    return (
                        <Tab key={category.id} className={"amenity-category"} label={category.title}>
                            <ListingResourceCards className={"amenity-categories-container"}
                                                  resources={currentGiftShopCategory.data}
                                                  currentPath={location.pathname}/>
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
    let {hotelInfo, giftShopCategories, currentGiftShopCategory, currentGiftShopCategoryResources} = state;
    return {
        hotelInfo,
        giftShopCategories,
        currentGiftShopCategory,
        currentGiftShopCategoryResources
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(giftShopActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GiftShop);