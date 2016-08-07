import createReduxStore from './store/createReduxStore'
import {getHotelInfo} from './actions/hotelActions'
import {getUserInfo} from './actions/userActions'
import {getChats} from './actions/chatActions'
import {getNotifications} from './actions/notificationsActions'
import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import {Router, browserHistory} from 'react-router'
import routes from './routes'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin(); // Needed for onTouchTap - a mobile friendly onClick

require('./static/styles/styles.scss'); // global styles
require('font-awesome/css/font-awesome.min.css');
require('bootstrap/dist/css/bootstrap.min.css');

let store = createReduxStore();
store.dispatch(getHotelInfo());
store.dispatch(getUserInfo());
store.dispatch(getChats());
store.dispatch(getNotifications());

console.log("store state after initial dispatch: ", store.getState());

console.log('Rendering InnJoy');

export default ReactDom.render(
    <Provider store={store}>
        <Router routes={routes} history={browserHistory}/>
    </Provider>
    , document.getElementById('app')
);


console.log('This is a test');

