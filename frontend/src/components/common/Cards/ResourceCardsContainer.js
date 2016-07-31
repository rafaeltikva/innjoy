import React, {PropTypes} from 'react'
import ResourceCard from './ResourceCard'

require('./ResourceCardsContainer.scss');

const ResourceCardsContainer = ({resources, currentPath, className}) => {
    className = className || '';
    console.log("currentPath: ", currentPath);

    console.log('rendering ResourceCardsContainer');
    return (
        <div className={`resource-cards-container ${className}`}>
            {resources.map((resource, index) => <ResourceCard key={resource.id}
                                                                  url={`${currentPath}/${resource.slug}`}
                                                                  title={resource.title} excerpt={resource.shortExcerpt}
                                                                  img={resource.img}/>)}
        </div>
    );
};

ResourceCardsContainer.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default ResourceCardsContainer;