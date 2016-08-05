import * as types from './actionTypes.js'
import {HotelApi} from '../api/mockHotelApi'
import * as reduxStore from './actionHelpers'

function fetchingAmenityResource() {
    return {
        type: types.FETCHING_AMENITY_RESOURCE
    }

}

function fetchingAmenityResources() {
    return {
        type: types.FETCHING_AMENITY_RESOURCES
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

function getAmenityResourcesSuccess(amenities) {
    return {
        type: types.GET_AMENITY_RESOURCES_SUCCESS,
        amenities
    }
}

function getAmenityResourcesFailed(error) {
    return {
        type: types.GET_AMENITY_RESOURCES_FAILED,
        error
    }
}

function getCurrentAmenityResourceSuccess(amenityResource) {
    return {
        type: types.GET_CURRENT_AMENITY_RESOURCE_SUCCESS,
        amenityResource
    }
}

function getCurrentAmenityResourceFailed(error) {
    return {
        type: types.GET_CURRENT_AMENITY_RESOURCE_FAILED,
        error
    }
}


function getAmenityCategorySuccess(amenityCategory) {
    return {
        type: types.GET_AMENITY_CATEGORY_SUCCESS,
        amenityCategory
    }
}

function getAmenityCategoryFailed(error) {
    return {
        type: types.GET_AMENITY_CATEGORY_FAILED,
        error
    }
}

function getAmenityCategoriesSuccess(amenityCategories) {
    return {
        type: types.GET_AMENITY_CATEGORIES_SUCCESS,
        amenityCategories
    }
}

function getAmenityCategoriesFailed(error) {
    return {
        type: types.GET_AMENITY_CATEGORIES_FAILED,
        error
    }
}

function setCurrentAmenitySuccess(amenityResource) {
    return {
        type: types.SET_CURRENT_AMENITY_RESOURCE_SUCCESS,
        amenityResource
    }
}

function initializeCurrentAmenityResource() {
    return {
        type: types.INITIALIZE_CURRENT_AMENITY_RESOURCE
    }

}


function setCurrentAmenityCategorySuccess(amenityCategory) {
    return {
        type: types.SET_CURRENT_AMENITY_CATEGORY_SUCCESS,
        amenityCategory
    }
}

function initializeCurrentAmenityCategory() {
    return {
        type: types.INITIALIZE_CURRENT_AMENITY_CATEGORY
    }

}

export function getMainResource() {
    return function (dispatch) {
        console.log('dispatching FETCHING_AMENITY_RESOURCES');
        dispatch(fetchingAmenityResources());
        let api = new HotelApi('amenities');
        api.getMainResource().then((amenities) => {
            console.log('dispatching GET_AMENITY_RESOURCES_SUCCESS');
            dispatch(getAmenityResourcesSuccess(amenities));
        }, error => {
            console.log('dispatching GET_AMENITY_RESOURCES_FAILED');
            dispatch(getAmenityResourcesFailed(error));
        });
    }
}

export function getRootAmenities(includeData) {
    return function (dispatch, getState) {

        let amenitiesFromStore = getState().amenities;

        if (amenitiesFromStore.data.length > 0) {
            console.log('found in store. dispatching GET_AMENITY_RESOURCES_SUCCESS');
            dispatch(getAmenityResourcesSuccess(amenitiesFromStore));
            return Promise.resolve(amenitiesFromStore); // returning the amenity category to be pass it to next promise chain
        }

        console.log('dispatching FETCHING_AMENITY_RESOURCES');
        dispatch(fetchingAmenityResources());
        let api = new HotelApi('amenities');
        api.getRootResources(includeData).then((amenities) => {
            console.log('dispatching GET_AMENITY_RESOURCES_SUCCESS', amenities);
            dispatch(getAmenityResourcesSuccess(amenities));
        }, error => {
            console.log('dispatching GET_AMENITY_RESOURCES_FAILED');
            dispatch(getAmenityResourcesFailed(error));
        });
    }
}

export function getAmenityCategoryBySlug(categorySlug, includeData) {
    return function (dispatch, getState) {

        let currentAmenityCategoriesFromStore = getState().amenityCategories.data;

        let amenityCategoryFromStore = reduxStore.getResourceFromStoreBySlug(categorySlug, currentAmenityCategoriesFromStore);

        if (amenityCategoryFromStore) {
            console.log('found in store. dispatching GET_AMENITY_CATEGORY_SUCCESS');
            dispatch(getAmenityCategorySuccess(category));
            return Promise.resolve(amenityCategoryFromStore); // returning the amenity category to be pass it to next promise chain
        }

        console.log('dispatching FETCHING_AMENITY_CATEGORY');
        dispatch(fetchingAmenityCategory());

        let api = new HotelApi('amenities');
        return api.getResourceBySlug(categorySlug, includeData, 'category').then(category => {
            console.log('dispatching GET_AMENITY_CATEGORY_SUCCESS');
            dispatch(getAmenityCategorySuccess(category));
            return category; // returning the amenity to be pass it to next promise chain
        }, error => {
            console.log('dispatching GET_AMENITY_CATEGORY_FAILED');
            dispatch(getAmenityCategoryFailed(error));
        });

    }
}

export function getAmenityResourceBySlug(amenitySlug, includeData) {
    return function (dispatch, getState) {
        let currentAmenitiesFromStore = getState().amenities;

        let amenityResourceFromStore = reduxStore.getResourceFromStoreBySlug(amenitySlug, currentAmenitiesFromStore.data);

        if (amenityResourceFromStore) {
            console.log('found in store. dispatching GET_CURRENT_AMENITY_RESOURCE_SUCCESS');
            dispatch(getCurrentAmenityResourceSuccess(amenityResourceFromStore));
            return Promise.resolve(amenityResourceFromStore); // returning the amenity to be pass it to next promise chain
        }

        console.log('dispatching FETCHING_AMENITY_RESOURCE');
        dispatch(fetchingAmenityResource());

        let api = new HotelApi('amenities');
        return api.getResourceBySlug(amenitySlug, includeData, 'resource').then(amenityResource => {
            console.log('dispatching GET_CURRENT_AMENITY_RESOURCE_SUCCESS');
            dispatch(getCurrentAmenityResourceSuccess(amenityResource));
            return amenityResource; // returning the amenity to be pass it to next promise chain
        }, error => {
            console.log('dispatching GET_CURRENT_AMENITY_RESOURCE_FAILED');
            dispatch(getCurrentAmenityResourceFailed(error));
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

export function getAmenityResourcesOfParent(parentId, includeData) {
    return function (dispatch, getState) {
        console.log('dispatching FETCHING_AMENITY_RESOURCES');
        dispatch(fetchingAmenityResources());
        let api = new HotelApi('amenities');
        return api.getResourcesOfParent(parentId, includeData, 'resource').then(amenityResources => {
            console.log('dispatching GET_AMENITY_RESOURCES_SUCCESS');
            dispatch(getAmenityResourcesSuccess(amenityResources));
            return amenityResources;
        }, error => {
            console.log('dispatching GET_AMENITY_RESOURCES_FAILED');
            dispatch(getAmenityResourcesFailed(error));
        });
    }
}

export function getAmenityCategoriesOfParent(parentId, includeData) {
    return function (dispatch, getState) {
        let currentAmenityCategoriesFromStore = getState().amenityCategories.data;
        console.log('current amenity categories in store: ', currentAmenityCategoriesFromStore );

        let foundCategoriesFromStore = reduxStore.getResourcesOfParent(parentId, currentAmenityCategoriesFromStore, 'category');

        if (foundCategoriesFromStore.data.length > 0) {
            console.log('found in store. dispatching GET_AMENITY_CATEGORIES_SUCCESS', foundCategoriesFromStore);
            dispatch(getAmenityCategoriesSuccess(foundCategoriesFromStore));
            return Promise.resolve(foundCategoriesFromStore);
        }

        console.log('dispatching FETCHING_AMENITY_CATEGORIES');
        dispatch(fetchingAmenityCategories());

        let api = new HotelApi('amenities');
        return api.getResourcesOfParent(parentId, includeData, 'category').then(amenityCategories => {
            console.log('dispatching GET_AMENITY_CATEGORIES_SUCCESS');
            dispatch(getAmenityCategoriesSuccess(amenityCategories));
            return amenityCategories;
        }, error => {
            console.log('dispatching GET_AMENITY_CATEGORIES_FAILED');
            dispatch(getAmenityCategoriesFailed(error));
        });
    }
}

export function setCurrentAmenityResource(amenityResource) {
    return function (dispatch) {
        console.log('dispatching SET_CURRENT_AMENITY_RESOURCE_SUCCESS');
        dispatch(setCurrentAmenitySuccess(amenityResource));
        console.log('dispatching INITIALIZE_CURRENT_AMENITY_RESOURCE');
        dispatch(initializeCurrentAmenityResource());
        return Promise.resolve(amenityResource);
    }
}

export function setCurrentAmenityCategory(category) {
    return function (dispatch) {
        console.log('dispatching SET_CURRENT_AMENITY_CATEGORY_SUCCESS', category);
        dispatch(setCurrentAmenityCategorySuccess(category));
        console.log('dispatching INITIALIZE_CURRENT_AMENITY_CATEGORY');
        dispatch(initializeCurrentAmenityCategory());
        return Promise.resolve(category);
    }
}


