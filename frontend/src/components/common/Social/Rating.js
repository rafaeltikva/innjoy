import React, {PropTypes} from 'react'
import ToggleStar from 'material-ui/svg-icons/toggle/star'
import ToggleStarBorder from 'material-ui/svg-icons/toggle/star-border'
import ToggleStarHalf from 'material-ui/svg-icons/toggle/star-half'

class Rating extends React.Component {
    render() {
        let {score} = this.props;
        let numOfStarstoShow = 5;
        let stars = [];

        for (var i = 1; i <= numOfStarstoShow; i++) {
            if (i < Math.round(score)) {
                stars.push(<ToggleStar key={i}/>);
            }
            else {
                stars.push(<ToggleStarBorder key={i}/>)
            }
        }
        
        return (
            <span>{stars}</span>
        );

    }
}

Rating.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default Rating;