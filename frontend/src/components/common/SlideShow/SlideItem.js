import React, {PropTypes} from 'react'
import ListItem from 'material-ui/List/ListItem'

require('./SlideItem.scss');

class SlideItem extends React.Component {
    render() {
        const {src, alt, active} = this.props;

        return (
            <ListItem className={(active) ? "slide-item active" : "slide-item"}>
                <div className={"slide-item-image"} style={{backgroundImage: `url(${src})`}}></div>
                <div className={"slide-item-cover"}></div>
            </ListItem>
        );
    }
}

SlideItem.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default SlideItem;