import initialState from '../store/initialState'
import * as types from '../actions/actionTypes'
import _ from 'lodash'

export default function amenitiesReducer(state = initialState.amenities, action) {
    console.log('running amenitiesReducer');
    switch (action.type) {
        case types.GET_AMENITIES_SUCCESS:
            return action.amenities;
        case types.GET_AMENITIES_OF_PARENT_SUCCESS:
            return Object.assign({}, { data: _.union(...state.data, ...action.amenitiesOfParent.data) });
        case types.GET_AMENITIES_FAILED:
            return { error: action.error} ;
        case types.FETCHING_AMENITIES:
            return Object.assign({}, state, { isFetching: true} );
        default:
            return state;
    }
}