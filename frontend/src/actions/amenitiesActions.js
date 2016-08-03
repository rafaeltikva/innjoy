import * as types from './actionTypes.js'
import {HotelApi} from '../api/mockHotelApi'


function fetchingAmenity() {
    return {
        type: types.FETCHING_AMENITY
    }

}

function fetchingAmenities() {
    return {
        type: types.FETCHING_AMENITIES
    }

}

function fetchingAmenityCategories() {
    return {
        type: types.FETCHING_AMENITY_CATEGORIES
    }

}

function fetchingAmenityCategory() {
    return {
        type: types.FETCHING_AMENITY_CATEGORY
    }

}

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

function initializeAmenity() {
    return {
        type: types.INITIALIZE_AMENITY
    }

}

function getAmenityCategoriesSuccess(categories) {
    return {
        type: types.GET_AMENITY_CATEGORIES_SUCCESS,
        categories
    }
}

function setCurrentAmenityCategorySuccess(category) {
    return {
        type: types.SET_CURRENT_AMENITY_CATEGORY_SUCCESS,
        category
    }
}

function getAmenityCategoriesFailed(error) {
    return {
        type: types.GET_AMENITY_CATEGORIES_FAILED,
        error
    }
}


function initializeAmenityCategory() {
    return {
        type: types.INITIALIZE_AMENITY_CATEGORY
    }

}

export function getMainResource() {
    return function (dispatch) {
        console.log('dispatching FETCHING_AMENITIES');
        dispatch(fetchingAmenities());
        let api = new HotelApi('amenities');
        api.getMainResource().then((amenities) => {
            console.log('dispatching GET_AMENITIES_SUCCESS');
            dispatch(getAmenitiesSuccess(amenities));
        }, error => {
            console.log('dispatching GET_AMENITIES_FAILED');
            dispatch(getAmenitiesFailed(error));
        });
    }
}

export function getRootAmenities() {
    return function (dispatch) {
        console.log('dispatching FETCHING_AMENITIES');
        dispatch(fetchingAmenities());
        let api = new HotelApi('amenities');
        api.getRootResources().then((amenities) => {
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
        let api = new HotelApi('amenities');
        return api.getCurrentResource(amenityName).then(amenity => {
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

export function getAllAmenityCategories() {
    return function (dispatch) {
        console.log('dispatching FETCHING_AMENITY_CATEGORIES');
        dispatch(fetchingAmenityCategories());
        let api = new HotelApi('amenities');
        api.getAllCategories().then((categories) => {
            console.log('dispatching GET_AMENITY_CATEGORIES_SUCCESS');
            dispatch(getAmenityCategoriesSuccess(categories));
        }, error => {
            console.log('dispatching GET_AMENITY_CATEGORIES_FAILED');
            dispatch(getAmenityCategoriesFailed(error));
        });
    }
}

export function getCategoriesOfAmenity(amenityId) {
    return function (dispatch) {
        console.log('dispatching FETCHING_AMENITY_CATEGORIES');
        dispatch(fetchingAmenityCategories());
        let api = new HotelApi('amenities');
        return api.getResourcesOfParent(amenityId).then(amenityCategories => {
            console.log('dispatching GET_AMENITY_CATEGORIES_SUCCESS', amenityCategories);
            dispatch(getAmenityCategoriesSuccess(amenityCategories));
            return amenityCategories;
        }, error => {
            console.log('dispatching GET_AMENITY_CATEGORIES_FAILED');
            dispatch(getAmenityCategoriesFailed(error));
            return error;
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

export function setCurrentAmenityCategory(category, includeData) {
    return function (dispatch) {
        console.log('dispatching FETCHING_AMENITY_CATEGORY');
        dispatch(fetchingAmenityCategory());
        if (includeData) {
            let api = new HotelApi('amenities');
            return api.getResourcesOfParent(category.id).then(amenities => {
                console.log('adding amenities data to category: ', amenities);
                category.data = amenities.data;
                console.log('dispatching SET_CURRENT_AMENITY_CATEGORY_SUCCESS with data', category);
                dispatch(setCurrentAmenityCategorySuccess(category));
                console.log('dispatching INITIALIZE_AMENITY_CATEGORY');
                dispatch(initializeAmenityCategory());
                return category;  // return category to allow accessing by chaining
            });
        }
        console.log('dispatching SET_CURRENT_AMENITY_CATEGORY_SUCCESS', category);
        dispatch(setCurrentAmenityCategorySuccess(category));
        console.log('dispatching INITIALIZE_AMENITY_CATEGORY');
        dispatch(initializeAmenityCategory());
        return Promise.resolve(category);
    }
}


