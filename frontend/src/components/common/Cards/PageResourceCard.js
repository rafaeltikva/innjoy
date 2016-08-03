import React, {PropTypes} from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton';
import SocialLikes from '../Social/SocialLikes'

require('./PageResourceCard.scss');

class PageResourceCard extends React.Component {
    render() {
        let {title, longDescription, img, className, likedUsers} =  this.props.resource;
        className = className || '';
        console.log('rendering PageResourceCard');
        return (
            <Card className={`page-resource-card ${className}`}>
                <CardMedia className={"page-resource-card-media"}>
                    <div className={"page-resource-card-image"} style={{backgroundImage: `url(${img})`}}></div>
                </CardMedia>
                <CardTitle title={title}/>
                <CardText className={"page-resource-card-description"}>{longDescription}</CardText>
                <CardText className={"page-resource-card-action"}>
                    <SocialLikes users={likedUsers} />
                    <CardActions>
                        <FlatButton className={"page-resource-card-button"} label="Book Now"/>
                    </CardActions>
                </CardText>

            </Card>
        );


    }
}

PageResourceCard.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default PageResourceCard;