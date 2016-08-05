import initialState from '../../store/initialState'
import * as types from '../../actions/actionTypes'

export default function userInfoReducer(state = initialState.userInfo, action) {
    switch (action.type) {
        case types.FETCHING_USER_INFO:
            return Object.assign({}, state, {isFetching: true });
        case types.GET_USER_INFO_SUCCESS:
            return action.userInfo;
        default:
            return state;
    }
}