import initialState from '../../store/initialState'
import * as types from '../../actions/actionTypes'
import _ from 'lodash'

export default function restaurantResourceReducer(state = initialState.currentRestaurantResource, action) {
    switch (action.type) {
        case types.FETCHING_RESTAURANT_RESOURCE:
            return Object.assign({}, state, { isFetching: true} );
        case types.GET_CURRENT_RESTAURANT_RESOURCE_SUCCESS:
            return action.resource;
        case types.GET_CURRENT_RESTAURANT_RESOURCE_FAILED:
            return Object.assign({}, state, { error: action.error}) ;
        case types.SET_CURRENT_RESTAURANT_RESOURCE_SUCCESS:
            return action.resource;
        case types.INITIALIZE_RESTAURANT_RESOURCE:
            return Object.assign({}, state, { isInit: true} );
        default:
            return state;
    }
}