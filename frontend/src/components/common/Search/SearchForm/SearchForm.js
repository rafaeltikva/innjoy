import React, {PropTypes} from 'react'
import SearchBar from './../SearchBar/SearchBar'
import SearchButton from './../SearchButton/SearchButton'
import {Form, InputGroup, FormGroup} from 'react-bootstrap'

require('./SearchForm.scss');

const SearchForm = (props) => {
    console.log('rendering SearchForm');
    return (
        /*<div className="search-container">
         <SearchBar placeholder={"I'm interested in..."} />
         <SearchButton />
         </div>*/
        <form className={"search-form"}>
                <SearchBar />
                <SearchButton />
        </form>
    );
};

SearchForm.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default SearchForm;