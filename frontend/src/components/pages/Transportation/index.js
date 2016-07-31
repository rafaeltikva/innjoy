import React, {PropTypes} from 'react'
import SideBar from '../../common/SideBar/SideBar'
import Content from '../../common/Content/Content'
import SlideShow from '../../common/SlideShow/SlideShow'
import InnerPage from '../../common/InnerPage/InnerPage'

const Transportation = (props) => {
    return (
        <div id="transportation-page" className={"page"}>
                <SlideShow />
                <InnerPage>
                    <SideBar />
                    <Content>
                        <h1>Transportation</h1>
                    </Content>
                </InnerPage>
        </div>
    );
};

Transportation.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default Transportation;