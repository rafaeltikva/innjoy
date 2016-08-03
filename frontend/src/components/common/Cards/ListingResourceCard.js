import React, {PropTypes} from 'react'
import {Link} from 'react-router'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import SocialLikes from '../Social/SocialLikes'
import Rating from '../Social/Rating'

require('./ListingResourceCard.scss');

class ListingResourceCard extends React.Component {
    render() {
        let {url, title, description, img, shortDescription, price, salesText, incentiveText, likedUsers, ratings, className } = this.props;
        return (
            <Card className={"listing-resource-card"}>

                <CardMedia className={"listing-resource-media"}>
                    <Link className={"listing-resource-link listing-resource-link-image"} to={url}>
                        <img className={"listing-resource-image"} src={img}/>
                    </Link>
                </CardMedia>

                <CardText className={"listing-resource-copy"}>
                    <Link className={"listing-resource-link listing-resource-link-title listing-resource-copy-item"} to={url}>
                        <CardTitle className={"listing-resource-title"} title={title}/>
                    </Link>

                    <div className={"listing-resource-copy-item listing-resource-price"}>{price}</div>
                    <div className={"listing-resource-copy-item listing-resource-sale"}>{salesText}</div>
                    <div className={"listing-resource-copy-item listing-resource-incentive"}>{incentiveText}</div>
                </CardText>

                <CardText className={"listing-resource-social"}>
                    <SocialLikes users={likedUsers}/>
                    <Rating score={ratings.avg}/>
                </CardText>

            </Card>
        );
    }
}

ListingResourceCard.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default ListingResourceCard;