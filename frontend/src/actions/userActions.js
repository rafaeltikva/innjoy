import * as types from './actionTypes'
import {HotelApi} from '../api/mockHotelApi'

function getUserInfoSuccess(userInfo) {
    return {
        type: types.GET_USER_INFO_SUCCESS,
        userInfo
    };
}

export function getUserInfo() {
    return function (dispatch) {
        let api = new HotelApi('userInfo');
        api.getMainResource().then((userInfo) => {
            console.log('dispatching GET_USER_INFO_SUCCESS with: ', userInfo);
            dispatch(getUserInfoSuccess(userInfo));
        });
    }
}