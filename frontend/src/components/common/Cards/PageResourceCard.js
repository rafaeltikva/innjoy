import React, {PropTypes} from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton';
import SocialLikes from '../Social/SocialLikes'

require('./PageResourceCard.scss');

class PageResourceCard extends React.Component {
    render() {
        let {resource, callToAction} = this.props;
        let {title, longDescription, img, className, likedUsers, address, phone} =  this.props.resource;

        className = className || '';
        console.log('rendering PageResourceCard');
        return (
            <Card className={`page-resource ${className}`}>
                <CardMedia className={"page-resource-media"}>
                    <img className={"page-resource-image"} src={img} />
                </CardMedia>
                <CardTitle title={title}/>
                <CardText className={"page-resource-copy"}>
                    <div className={"page-resource-address"}>{address}</div>
                    <div className={"page-resource-phone"}>{phone}</div>
                    <div className={"page-resource-description"} dangerouslySetInnerHTML={{__html: longDescription}} />
                </CardText>
                <CardText className={"page-resource-action"}>
                    <SocialLikes users={likedUsers}/>
                    <CardActions>
                        <FlatButton className={"page-resource-button"} label={callToAction} />
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