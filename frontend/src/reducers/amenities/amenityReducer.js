import initialState from '../../store/initialState'
import * as types from '../../actions/actionTypes'

export default function amenityReducer(state = initialState.currentAmenity, action) {
    switch (action.type) {
        case types.FETCHING_AMENITY_RESOURCE:
            return Object.assign({}, state, { isFetching: true} );
        case types.GET_CURRENT_AMENITY_RESOURCE_SUCCESS:
            return action.amenityResource;
        case types.GET_CURRENT_AMENITY_RESOURCE_FAILED:
            return { error: action.error} ;
        case types.SET_CURRENT_AMENITY_RESOURCE_SUCCESS:
            return action.amenityResource;
        case types.INITIALIZE_CURRENT_AMENITY_RESOURCE:
            return Object.assign({}, state, { isInit: true} );

        default:
            return state;
    }
}