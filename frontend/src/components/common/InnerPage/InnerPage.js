import React, {PropTypes} from 'react'

require('./InnerPage.scss');

const InnerPage = ({children}) => {
    return (
        <div id="inner-page" className={"inner-page"}>
            {children}
        </div>
    );
};

InnerPage.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default InnerPage;