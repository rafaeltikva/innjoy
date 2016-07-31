import initialState from '../store/initialState'
import * as types from '../actions/actionTypes'

export default function chatsReducer(state = initialState.chats, action) {
    switch (action.type) {
        case types.FETCHING_CHATS:
            return Object.assign({}, state, { isFetching: true });
        case types.GET_CHATS_SUCCESS:
            return action.chats;
        default:
            return state;
    }
}