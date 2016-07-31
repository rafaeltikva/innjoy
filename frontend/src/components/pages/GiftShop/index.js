import React, {PropTypes} from 'react'
import SideBar from '../../common/SideBar/SideBar'
import Content from '../../common/Content/Content'
import SlideShow from '../../common/SlideShow/SlideShow'
import InnerPage from '../../common/InnerPage/InnerPage'

const GiftShop = (props) => {
    return (
        <div id="gift-shop-page" className={"page"}>
                <SlideShow />
                <InnerPage>
                    <SideBar />
                    <Content>
                        <h1>Gift Shop</h1>
                    </Content>
                </InnerPage>
        </div>
    );
};

GiftShop.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default GiftShop;