import React, {PropTypes} from 'react'
import SideBar from '../../common/SideBar/SideBar'
import Content from '../../common/Content/Content'
import SlideShow from '../../common/SlideShow/SlideShow'
import InnerPage from '../../common/InnerPage/InnerPage'

const FrontDesk = (props) => {
    return (
        <div id="front-desk-page" className={"page"}>
                <SlideShow />
                <InnerPage>
                    <SideBar />
                    <Content>
                        <h1>Front Desk</h1>
                    </Content>
                </InnerPage>
        </div>
    );
};

FrontDesk.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default FrontDesk;