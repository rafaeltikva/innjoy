import React, {PropTypes} from 'react'
import Button from '../Button/Button'
import Icon from './../Icon/Icon'

require('./SearchIcon.scss');

const SearchIcon = ({className}) => {
    console.log('rendering Header');
    return (
        <Icon className={{"fa": true, "fa-search" :true, "search-icon": true}}/>
    );
};

SearchIcon.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default SearchIcon;