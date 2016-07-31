
import * as types from './actionTypes.js'
import {HotelApi} from '../api/mockHotelApi'

function getNotificationsSuccess(notifications) {
    return {
        type: types.GET_NOTIFICATIONS_SUCCESS,
        notifications,
        isFetching: false
    }
}


function getNotificationsError(error) {
    return {
        type: types.GET_NOTIFICATIONS_ERROR,
        error,
        isFetching: false
    }
}

function fetchingNotifications() {
    return {
        type: types.FETCHING_NOTIFICATIONS,
        isFetching: true
    }
}

export function getNotifications() {
    return function(dispatch) {
        console.log("dispatching FETCHING_NOTIFICATIONS");
        dispatch(fetchingNotifications());
        let api = new HotelApi();
        api.getNotifications().then((notifications) => {
            console.log("dispatching GET_NOTIFICATIONS_SUCCESS with: ", notifications);
            dispatch(getNotificationsSuccess(notifications));
        });
    }
}