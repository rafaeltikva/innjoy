import initialState from '../../store/initialState'
import * as types from '../../actions/actionTypes'

export default function searchReducer(state = initialState.search, action) {
    switch (action.type) {
        case types.SEARCHING_FOR_RESOURCES:
            return Object.assign({}, state, { isSearching: true });
        case types.SEARCHING_FOR_RESOURCES_FINISHED:
            return Object.assign({}, state, { isSearching: false });
        default:
            return state;
    }
}