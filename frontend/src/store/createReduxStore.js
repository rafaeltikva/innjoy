import rootReducer from '../reducers'
import initialState from './initialState'
import {createStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'

export default function createReduxStore() {
    return createStore(rootReducer, initialState, compose(
        applyMiddleware(thunkMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
}


