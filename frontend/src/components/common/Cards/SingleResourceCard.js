import React, {PropTypes} from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton';
import SocialLikes from '../Social/SocialLikes'

require('./SingleResourceCard.scss');

class SingleResourceCard extends React.Component {
    render() {
        let {title, longExcerpt, img, className, likedUsers} =  this.props.resource;
        className = className || '';
        console.log('rendering SingleResourceCard');
        return (
            <Card className={`single-resource-card ${className}`}>
                <CardMedia className={"single-resource-card-media"}>
                    <div className={"single-resource-card-image"} style={{backgroundImage: `url(${img})`}}></div>
                </CardMedia>
                <CardTitle title={title}/>
                <CardText className={"single-resource-card-description"}>{longExcerpt}</CardText>
                <CardText className={"single-resource-card-action"}>
                    <SocialLikes users={likedUsers} />
                    <CardActions>
                        <FlatButton className={"single-resource-card-button"} label="Book Now"/>
                    </CardActions>
                </CardText>

            </Card>
        );


    }
}

SingleResourceCard.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default SingleResourceCard;