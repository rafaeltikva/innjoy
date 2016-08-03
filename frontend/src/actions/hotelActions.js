import * as types from './actionTypes.js'
import {HotelApi} from '../api/mockHotelApi'

function getMainResourceSuccess(hotelInfo) {
    return {
        type: types.GET_HOTEL_INFO_SUCCESS,
        hotelInfo,
        isFetching: false
    }
}


function getMainResourceError(error) {
    return {
        type: types.GET_HOTEL_INFO_ERROR,
        error,
        isFetching: false
    }
}

function fetchingHotelInfo() {
    return {
        type: types.FETCHING_HOTEL_INFO,
        isFetching: true
    }
}

export function getHotelInfo() {
    return function(dispatch) {
        console.log("dispatching FETCHING_HOTEL_INFO");
        dispatch(fetchingHotelInfo());
        let api = new HotelApi('hotelInfo');
        api.getMainResource().then((hotelInfo) => {
            console.log("dispatching GET_HOTEL_INFO_SUCCESS with: ", hotelInfo);
            dispatch(getMainResourceSuccess(hotelInfo));
        });
    }
}