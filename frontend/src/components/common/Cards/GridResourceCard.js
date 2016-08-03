import React, {PropTypes} from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import {Link} from 'react-router'

require('./GridResourceCard.scss');

class GridResourceCard extends React.Component {
    render() {
        let {url, title, description, img, className } = this.props;
        className = className || '';

        return (
            <Card className={`grid-resource-card ${className}`}>
                <Link className={"grid-resource-link"} to={url}>
                    <CardMedia className={"grid-resource-card-media"}
                               overlay={<CardTitle className={"grid-resource-title"} title={title} subtitle={description} />}>
                        <div className={"grid-resource-card-image"} style={{backgroundImage: `url(${img})`}}></div>
                    </CardMedia>
                </Link>
            </Card>
        );

    }
}

GridResourceCard.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default GridResourceCard;