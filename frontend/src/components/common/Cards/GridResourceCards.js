import React, {PropTypes} from 'react'
import GridResourceCard from './GridResourceCard'

require('./GridResourceCards.scss');

const GridResourceCards = ({resources, currentPath, className}) => {
    className = className || '';
    console.log("currentPath: ", currentPath);

    console.log('rendering GridResourceCards');
    return (
        <div className={`grid-resource-cards ${className}`}>
            {resources.map((resource, index) => <GridResourceCard key={resource.id}
                                                                  url={`${currentPath}/${resource.slug}`}
                                                                  title={resource.title} description={resource.shortDescription}
                                                                  img={resource.img}/>)}
        </div>
    );
};

GridResourceCards.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default GridResourceCards;