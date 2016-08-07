import initialState from '../../store/initialState'
import * as types from '../../actions/actionTypes'
import _ from 'lodash'

export default function funResourceReducer(state = initialState.currentCoffeeShopResource, action) {
    switch (action.type) {
        case types.FETCHING_FUN_RESOURCE:
            return Object.assign({}, state, { isFetching: true} );
        case types.GET_CURRENT_FUN_RESOURCE_SUCCESS:
            return action.resource;
        case types.GET_CURRENT_FUN_RESOURCE_FAILED:
            return Object.assign({}, state, { error: action.error}) ;
        case types.SET_CURRENT_FUN_RESOURCE_SUCCESS:
            return action.resource;
        case types.INITIALIZE_FUN_RESOURCE:
            return Object.assign({}, state, { isInit: true} );
        default:
            return state;
    }
}