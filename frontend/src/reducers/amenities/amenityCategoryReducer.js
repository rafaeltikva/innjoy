import initialState from '../../store/initialState'
import * as types from '../../actions/actionTypes'

export default function amenityCategoryReducer (state = initialState.currentAmenityCategory, action) {
    switch (action.type) {
        case types.FETCHING_AMENITY_CATEGORY:
            return Object.assign({}, state, { isFetching: true} );
        case types.GET_AMENITY_CATEGORY_SUCCESS:
            return action.amenityCategory;
        case types.GET_AMENITY_CATEGORY_FAILED:
            return action.error;
        case types.INITIALIZE_CURRENT_AMENITY_CATEGORY:
            return Object.assign({}, state, { isInit: true} );
        case types.SET_CURRENT_AMENITY_CATEGORY_SUCCESS:
            return action.amenityCategory;
        default:
            return state;
    }
}