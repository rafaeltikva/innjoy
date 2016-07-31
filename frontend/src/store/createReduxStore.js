import rootReducer from '../reducers'
import initialState from './initialState'
import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'

export default function createReduxStore() {
    return createStore(rootReducer, initialState, applyMiddleware(thunkMiddleware));
}


