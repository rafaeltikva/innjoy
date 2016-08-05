import initialState from '../../store/initialState'
import * as types from '../../actions/actionTypes'
import _ from 'lodash'

export default function amenitiesReducer(state = initialState.amenities, action) {
    switch (action.type) {
        case types.GET_AMENITY_RESOURCES_SUCCESS:
            return { data: _.union(state.data, action.amenities.data)};
        case types.GET_AMENITY_RESOURCES_FAILED:
            return { error: action.error} ;
        case types.FETCHING_AMENITY_RESOURCES:
            return Object.assign({}, state, { isFetching: true} );
        default:
            return state;
    }
}