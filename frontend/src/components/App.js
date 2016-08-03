import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Header from './common/Header/Header'
import Footer from './common/Footer/Footer'
import Main from './common/Main/Main'
import Chats from './common/Chat/Chats'
import Loading from './common/Loading'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {lightBlack, blueA200, cyanA100} from 'material-ui/styles/colors'

const muiTheme = getMuiTheme({
    palette: {
        textColor: lightBlack,
        primary1Color: '#263238',
        primary2Color: '#40525B',
        primary2Color: '#182A33',
        accentColor: '#BAA58C'
    },
    appBar: {
        height: 60
    }
});


class App extends React.Component {
    constructor(props, context) {
        console.log('App constructor');
        super(props);
        this.state = {
            chatsComponent: undefined
        }

    }

    componentDidMount() {
        console.log('setting chatsComponent', this.state.chatsComponent);
        this.setState({chatsComponent: this.state.chatsComponent}); // updating chatsComponent to pass forward to ChatMenu via Header
    }

    render() {
        let {location, route, chats, notifications, hotelInfo, children} = this.props;
        console.log('The App props: ', this.props);
        console.log('The current router location: ', this.props.location);
        console.log('Rendering App');
        const includeSearchInNavBar = location.pathname !== '/' && route.path !== '/index' ;

        // MuiThemeProvider is used to pass the muiTheme down to the child components using React's context
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <Header includeSearch={includeSearchInNavBar} chatsComponent={this.state.chatsComponent}
                            chats={chats} notifications={notifications}/>
                    <Main>
                        {hotelInfo.isFetching ? <Loading />: children}
                    </Main>
                    <Footer>
                        <Chats ref={(component) => this.state.chatsComponent = component} chats={chats}/>
                    </Footer>

                </div>
            </MuiThemeProvider>
        );
    }
}

function mapStateToProps(state, ownProps) {
    console.log('mapping state to App props:', state);
    return {
        userInfo: state.userInfo,
        hotelInfo: state.hotelInfo,
        chats: state.chats,
        notifications: state.notifications
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

console.log('Exporting default App');
export default connect(mapStateToProps)(App);