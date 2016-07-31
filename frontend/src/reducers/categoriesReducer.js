import initialState from '../store/initialState'
import * as types from '../actions/actionTypes'

export default function categoryReducer (state = initialState.amenityCategories, action) {
    console.log('running categoriesReducer');
    switch (action.type) {
        case types.FETCHING_CATEGORIES:
            return Object.assign({}, state, { isFetching: true} );
        case types.GET_CATEGORIES_SUCCESS:
            return action.categories;
        case types.GET_CATEGORIES_FAILED:
            return { error: action.error} ;
        default:
            return state;
    }
}