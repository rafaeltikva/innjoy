import React, {PropTypes} from 'react'

require('./Main.scss');

class Main extends React.Component {
    render() {
        console.log('rendering Main');
        return (
            <main id={"main"} className={"main"}>
                {this.props.children}
            </main>
        );
    }
}

Main.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default Main;