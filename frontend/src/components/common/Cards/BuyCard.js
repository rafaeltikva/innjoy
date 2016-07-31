import React, {PropTypes} from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton';

class BuyCard extends React.Component {
    render() {
        <Card>
            <CardTitle />
            <CardText></CardText>
            <CardActions>
                <FlatButton>Book Now</FlatButton>
            </CardActions>
        </Card>
    }
}

BuyCard.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default BuyCard;