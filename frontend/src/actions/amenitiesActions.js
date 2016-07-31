import * as types from './actionTypes.js'
import {HotelApi} from '../api/mockHotelApi'

function getAmenitiesSuccess(amenities) {
    return {
        type: types.GET_AMENITIES_SUCCESS,
        amenities
    }
}


function getAmenitiesFailed(error) {
    return {
        type: types.GET_AMENITIES_FAILED,
        error
    }
}

function fetchingAmenities() {
    return {
        type: types.FETCHING_AMENITIES
    }

}

function getCurrentAmenitySuccess(amenity) {
    return {
        type: types.GET_CURRENT_AMENITY_SUCCESS,
        amenity
    }
}

function getCurrentAmenityFailed(error) {
    return {
        type: types.GET_CURRENT_AMENITY_FAILED,
        error
    }
}

function setCurrentAmenitySuccess(amenity) {
    return {
        type: types.SET_CURRENT_AMENITY_SUCCESS,
        amenity
    }
}

function getAmenitiesOfParentSuccess(amenitiesOfParent) {
    return {
        type: types.GET_AMENITIES_OF_PARENT_SUCCESS,
        amenitiesOfParent
    }
}

function fetchingAmenity() {
    return {
        type: types.FETCHING_AMENITY
    }

}

function initializeAmenity() {
    return {
        type: types.INITIALIZE_AMENITY
    }

}

export function getAllAmenities() {
    return function (dispatch) {
        console.log('dispatching FETCHING_AMENITIES');
        dispatch(fetchingAmenities());
        let api = new HotelApi();
        api.getAllAmenities().then((amenities) => {
            console.log('dispatching GET_AMENITIES_SUCCESS');
            dispatch(getAmenitiesSuccess(amenities));
        }, error => {
            console.log('dispatching GET_AMENITIES_FAILED');
            dispatch(getAmenitiesFailed(error));
        });
    }
}

export function getAmenitiesOfParent(amenityId, amenityType) {
    return function (dispatch, getState) {
        console.log('dispatching FETCHING_AMENITIES');
        dispatch(fetchingAmenities());
        let api = new HotelApi();
        return api.getAmenitiesOfParent(amenityId, amenityType).then(amenitiesOfParent => {
            console.log('dispatching GET_AMENITIES_OF_PARENT_SUCCESS', amenitiesOfParent);
            dispatch(getAmenitiesOfParentSuccess(amenitiesOfParent));
            return amenitiesOfParent;
        }, error => {
            console.log('dispatching GET_AMENITIES_OF_PARENT_FAILED');
            dispatch(getAmenitiesFailed(error));
        });
    }
}

export function getRootAmenities() {
    return function (dispatch) {
        console.log('dispatching FETCHING_AMENITIES');
        dispatch(fetchingAmenities());
        let api = new HotelApi();
        api.getRootAmenities().then((amenities) => {
            console.log('dispatching GET_AMENITIES_SUCCESS', amenities);
            dispatch(getAmenitiesSuccess(amenities));
        }, error => {
            console.log('dispatching GET_AMENITIES_FAILED');
            dispatch(getAmenitiesFailed(error));
        });
    }
}

export function getCurrentAmenity(amenityName) {
    return function (dispatch) {
        console.log('dispatching FETCHING_AMENITY');
        dispatch(fetchingAmenity());
        let api = new HotelApi();
        return api.getCurrentAmenity(amenityName).then(amenity => {
            console.log('dispatching GET_CURRENT_AMENITY_SUCCESS');
            dispatch(getCurrentAmenitySuccess(amenity));
            console.log('dispatching INITIALIZE_AMENITY');
            dispatch(initializeAmenity());
            return amenity; // returning the amenity to be pass it to next promise chain
        }, error => {
            console.log('dispatching GET_CURRENT_AMENITY_FAILED');
            dispatch(getAmenitiesFailed(error));
        });

    }
}

export function setCurrentAmenity(amenity) {
    return function (dispatch) {
        console.log('dispatching SET_CURRENT_AMENITY_SUCCESS');
        dispatch(setCurrentAmenitySuccess(amenity));
        console.log('dispatching INITIALIZE_AMENITY');
        dispatch(initializeAmenity());
        return Promise.resolve(amenity);
    }
}

