import initialState from '../../store/initialState'
import * as types from '../../actions/actionTypes'

export default function amenityCategoryReducer (state = initialState.currentAmenityCategory, action) {
    console.log('running amenityCategoryReducer');
    switch (action.type) {
        case types.FETCHING_AMENITY_CATEGORY:
            return Object.assign({}, state, { isFetching: true} );
        case types.INITIALIZE_CATEGORY:
            return Object.assign({}, state, { isInit: true} );
        case types.SET_CURRENT_AMENITY_CATEGORY_SUCCESS:
            return action.category;
        default:
            return state;
    }
}