import * as types from './actionTypes'
import {UserApi} from '../api/mockHotelApi'

function getUserInfoSuccess(userInfo) {
    return {
        type: types.GET_USER_INFO_SUCCESS,
        userInfo
    };
}

export function getUserInfo() {
    return function (dispatch) {
        let api = new UserApi();
        api.getUserInfo().then((userInfo) => {
            console.log('dispatching GET_USER_INFO_SUCCESS with: ', userInfo);
            dispatch(getUserInfoSuccess(userInfo));
        });
    }
}