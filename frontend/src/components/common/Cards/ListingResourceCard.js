import React, {PropTypes} from 'react'
import {Link} from 'react-router'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import SocialLikes from '../Social/SocialLikes'
import Rating from '../Social/Rating'

require('./ListingResourceCard.scss');

class ListingResourceCard extends React.Component {
    render() {
        let {resource, url, className } = this.props;
        return (
            <Card className={"listing-resource-card"}>

                <CardMedia className={"listing-resource-media"}>
                    <Link className={"listing-resource-link listing-resource-link-image"} to={url}>
                        <img className={"listing-resource-image"} src={resource.img}/>
                    </Link>
                </CardMedia>

                <CardText className={"listing-resource-copy"}>
                    <Link className={"listing-resource-link listing-resource-link-title listing-resource-copy-item"} to={url}>
                        <CardTitle className={"listing-resource-title"} title={resource.title}/>
                    </Link>

                    <div className={"listing-resource-copy-item listing-resource-price"}>{resource.price}</div>
                    <div className={"listing-resource-copy-item listing-resource-sale"}>{resource.salesText}</div>
                    <div className={"listing-resource-copy-item listing-resource-incentive"}>{resource.incentiveText}</div>
                </CardText>

                <CardText className={"listing-resource-social"}>
                    <SocialLikes users={resource.likedUsers}/>
                    {resource.ratings ? <Rating score={resource.ratings.avg}/> : null}
                </CardText>

            </Card>
        );
    }
}

ListingResourceCard.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default ListingResourceCard;