import initialState from '../../store/initialState'
import * as types from '../../actions/actionTypes'

export default function amenityCategoriesReducer (state = initialState.amenityCategories, action) {
    console.log('running amenityCategoriesReducer');
    switch (action.type) {
        case types.FETCHING_AMENITY_CATEGORIES:
            return Object.assign({}, state, { isFetching: true} );
        case types.GET_AMENITY_CATEGORIES_SUCCESS:
            return action.categories;
        case types.GET_AMENITY_CATEGORIES_FAILED:
            return { error: action.error} ;
        default:
            return state;
    }
}