import React, {PropTypes} from 'react'
import {browserHistory} from 'react-router'
import SearchBar from './../SearchBar/SearchBar'
import SearchButton from './../SearchButton/SearchButton'
import {Form, InputGroup, FormGroup} from 'react-bootstrap'

require('./SearchForm.scss');

class SearchForm extends React.Component {
    constructor(props) {
        super(props);

        // initialize state
        this.state = {
            searchQuery: ''
        };

        // bind handlers to this context
        this.getSearchResults = this.getSearchResults.bind(this);
        this.handleSearchQueryChange = this.handleSearchQueryChange.bind(this);

    }

    render() {
        console.log('rendering SearchForm');
        return (

            <form ref={formElement => this.getSearchResults.bind(this, formElement)} className={"search-form"} onSubmit={this.getSearchResults}>
                <SearchBar onChange={this.handleSearchQueryChange} />
                <SearchButton />
            </form>
        );
    }

    handleSearchQueryChange(event) {
        this.setState({ searchQuery: event.target.value});
    }

    getSearchResults(event) {
        event.preventDefault();
        console.log('get search results of: ', this.state.searchQuery);
        browserHistory.push(`/search?q=${this.state.searchQuery}`);
    }
}

SearchForm.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default SearchForm;