import * as types from './actionTypes'
import {HotelApi} from '../api/mockHotelApi'

function fetchingUserInfo() {
    return {
        type: types.FETCHING_USER_INFO
    }
}

function getUserInfoSuccess(userInfo) {
    return {
        type: types.GET_USER_INFO_SUCCESS,
        userInfo
    };
}

export function getUserInfo() {
    return function (dispatch) {
        console.log('dispatching FETCHING_USER_INFO');
        dispatch(fetchingUserInfo());
        let api = new HotelApi('userInfo');
        api.getMainResource().then((userInfo) => {
            console.log('dispatching GET_USER_INFO_SUCCESS with: ', userInfo);
            dispatch(getUserInfoSuccess(userInfo));
        });
    }
}