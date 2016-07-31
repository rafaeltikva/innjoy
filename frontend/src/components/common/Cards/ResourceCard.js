import React, {PropTypes} from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import {Link} from 'react-router'

require('./ResourceCard.scss');

class ResourceCard extends React.Component {
    render() {
        let {url, title, excerpt, img, className } = this.props;
        className = className || '';

        return (
            <Card className={`resource-card ${className}`}>
                <Link className={"resource-link"} to={url}>
                    <CardMedia className={"resource-card-media"}
                               overlay={<CardTitle className={"resource-title"} title={title} subtitle={excerpt} />}>
                        <div className={"resource-card-image"} style={{backgroundImage: `url(${img})`}}></div>
                    </CardMedia>
                </Link>
            </Card>
        );

    }
}

ResourceCard.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default ResourceCard;