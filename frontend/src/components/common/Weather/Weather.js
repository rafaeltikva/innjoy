import React, {PropTypes} from 'react'
import Forecast from 'react-forecast'

require('./Weather.scss');

const Weather = (props) => {

    return (
        <Forecast latitude={32.0853} longitude={34.7818} name="Tel Aviv, Israel" units="ca" />
    );

    /*return (
        <img src={'../../static/img/Weather.png'} />
    );*/
};

Weather.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default Weather;