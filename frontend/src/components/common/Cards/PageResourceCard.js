import React, {PropTypes} from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton';
import SocialLikes from '../Social/SocialLikes'

require('./PageResourceCard.scss');

class PageResourceCard extends React.Component {
    render() {
        let {resource, callToAction} = this.props;
        let {title, longDescription, img, className, likedUsers} =  this.props.resource;

        className = className || '';
        console.log('rendering PageResourceCard');
        return (
            <Card className={`page-resource-card ${className}`}>
                <CardMedia className={"page-resource-card-media"}>
                    <img className={"page-resource-card-image"} src={img} />
                </CardMedia>
                <CardTitle title={title}/>
                <CardText className={"page-resource-card-description"}>
                    <div dangerouslySetInnerHTML={{__html: longDescription}}/>
                </CardText>
                <CardText className={"page-resource-card-action"}>
                    <SocialLikes users={likedUsers}/>
                    <CardActions>
                        <FlatButton className={"page-resource-card-button"} label={callToAction} />
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