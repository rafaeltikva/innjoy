import React, {PropTypes} from 'react'
import CircularProgress from 'material-ui/CircularProgress'

const Loading = (props) => {
    let style = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "inherit",
        height: "100%"
    };

    return (
        <CircularProgress size={2} style={style}/>
    );
};

Loading.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default Loading;