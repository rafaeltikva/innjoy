import React, {PropTypes} from 'react'

require('./Content.scss');

class Content extends React.Component {
    render() {
        return (
            <div id={"content"} class={"content"}>
                {this.props.children}
            </div>
        );

    }
}

Content.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default Content;