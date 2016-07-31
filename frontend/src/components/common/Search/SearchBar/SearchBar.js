import React, {PropTypes} from 'react'
import {FormControl} from 'react-bootstrap'

require('./SearchBar.scss');

const SearchBar = (props) => {

    return (
        <input type="text" placeholder={"I'm interested in..."} className={'search-bar'} {...props} />
        //<FormControl type="text" placeholder={"I'm interested in..."} className={'search-bar'} />
    );
};

SearchBar.propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string,
    id: PropTypes.string,
    className: PropTypes.string
};

export default SearchBar;