import React, {PropTypes} from 'react'
import ListingResourceCard from './ListingResourceCard'

require('./ListingResourceCards.scss');

const ListingResourceCards = ({resources, currentPath, className}) => {
    className = className || '';
    console.log("currentPath: ", currentPath);

    console.log('rendering ListingResourceCards', resources);
    return (
        <div className={`listing-resource-cards ${className}`}>
            {resources.map((resource, index) => <ListingResourceCard key={resource.id}
                                                                  url={`${currentPath}/${resource.slug}`} {...resource} />)}
        </div>
    );
};

ListingResourceCards.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default ListingResourceCards;