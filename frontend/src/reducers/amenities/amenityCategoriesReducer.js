import initialState from '../../store/initialState'
import * as types from '../../actions/actionTypes'
import _ from 'lodash'

export default function amenityCategoriesReducer (state = initialState.amenityCategories, action) {
    switch (action.type) {
        case types.FETCHING_AMENITY_CATEGORIES:
            return Object.assign({}, state, { isFetching: true} );
        case types.GET_AMENITY_CATEGORIES_SUCCESS:
            return { data: _.union(state.data, action.amenityCategories.data)};
        case types.GET_AMENITY_CATEGORIES_FAILED:
            return { error: action.error} ;
        default:
            return state;
    }
}