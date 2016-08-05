import React, {PropTypes} from 'react'
import ListingResourceCard from './ListingResourceCard'

require('./ListingResourceCards.scss');

const ListingResourceCards = ({resources, currentPath, className}) => {
    className = className || '';

    console.log('rendering ListingResourceCards', resources);

    return (
        <div className={`listing-resource-cards ${className}`}>
            {resources.map((resource, index) => <ListingResourceCard key={resource.id} resource={resource}
                                                                  url={`${currentPath}/${resource.slug}`} />)}
        </div>
    );
};

ListingResourceCards.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default ListingResourceCards;