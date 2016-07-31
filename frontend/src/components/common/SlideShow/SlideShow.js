import React, {PropTypes} from 'react'
import List from 'material-ui/List'
import SlideItem from './SlideItem.js'

require('./SlideShow.scss');

class SlideShow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {activeSlideKey: null};

        this.toggleSlide = this.toggleSlide.bind(this);
    }

    toggleSlide() {
        this.state.activeSlideKey = (this.state.activeSlideKey < this.props.slideItems.length - 1) ? this.state.activeSlideKey + 1 : 0;
        this.setState({activeSlideKey: this.state.activeSlideKey});
    }

    componentWillMount() {
        this.setState({activeSlideKey: 0});
    }

    componentDidMount() {
        this.intervalId = setInterval(this.toggleSlide, 10000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        console.log('rendering SlideShow with item:', this.state.activeSlideKey);
        return (
            <List id="slideshow" className={"slideshow"} innerDivStyle={{height: "100%"}}>
                {this.props.slideItems.map((slideItem, index) => <SlideItem active={this.state.activeSlideKey === index}
                                                                      key={index} {...slideItem} />)}
            </List>
        );
    }


}

SlideShow.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default SlideShow;