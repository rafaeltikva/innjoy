import React, {PropTypes} from 'react';
import IconButton from 'material-ui/IconButton'

require('./SearchButton.scss');

const SearchButton = ({className}) => {
    console.log('rendering SearchButton');
    return (
        <IconButton type="submit" iconClassName={"fa fa-search search-icon"} className={"search-button"} />
    );
};

SearchButton.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default SearchButton;