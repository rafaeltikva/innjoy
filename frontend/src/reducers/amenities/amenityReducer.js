import initialState from '../../store/initialState'
import * as types from '../../actions/actionTypes'

export default function amenityReducer(state = initialState.currentAmenity, action) {
    console.log('running amenityReducer');
    switch (action.type) {
        case types.FETCHING_AMENITY:
            return Object.assign({}, state, { isFetching: true} );
        case types.GET_CURRENT_AMENITY_SUCCESS:
            return action.amenity;
        case types.GET_CURRENT_AMENITY_FAILED:
            return { error: action.error} ;
        case types.SET_CURRENT_AMENITY_SUCCESS:
            return action.amenity;
        case types.INITIALIZE_AMENITY:
            return Object.assign({}, state, { isInit: true} );

        default:
            return state;
    }
}