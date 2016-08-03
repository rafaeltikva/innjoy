import initialState from '../../store/initialState'
import * as types from '../../actions/actionTypes'

export default function userInfoReducer(state = initialState.userInfo, action) {
    console.log('running userInfoReducer with: ', action.userInfo);
    switch (action.type) {
        case types.GET_USER_INFO_SUCCESS:
            return action.userInfo;
        default:
            return state;
    }
}