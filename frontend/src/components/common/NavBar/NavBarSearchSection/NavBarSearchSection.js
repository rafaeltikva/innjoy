import React, {PropTypes} from 'react'
import NavBarSection from '../NavBarSection/NavBarSection'
import SearchForm from '../../Search/SearchForm/SearchForm'

require('./NavBarSearchSection.scss');

const NavBarSearchSection = (props) => {
    return (
        <NavBarSection className={"navbar-section-search"}>
            <SearchForm />
        </NavBarSection>
    );
};

NavBarSearchSection.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default NavBarSearchSection;