import * as types from './actionTypes.js'
import {HotelApi} from '../api/mockHotelApi'

function getHotelInfoSuccess(hotelInfo) {
    return {
        type: types.GET_HOTEL_INFO_SUCCESS,
        hotelInfo,
        isFetching: false
    }
}


function getHotelInfoError(error) {
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
        let api = new HotelApi();
        api.getHotelInfo().then((hotelInfo) => {
            console.log("dispatching GET_HOTEL_INFO_SUCCESS with: ", hotelInfo);
            dispatch(getHotelInfoSuccess(hotelInfo));
        });
    }
}