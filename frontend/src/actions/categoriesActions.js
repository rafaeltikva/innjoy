import * as types from './actionTypes.js'
import {HotelApi} from '../api/mockHotelApi'

function getCategoriesSuccess(categories) {
    return {
        type: types.GET_CATEGORIES_SUCCESS,
        categories
    }
}

function setCurrentCategorySuccess(category) {
    return {
        type: types.SET_CURRENT_CATEGORY_SUCCESS,
        category
    }
}

function getCategoriesFailed(error) {
    return {
        type: types.GET_CATEGORIES_FAILED,
        error
    }
}

function fetchingCategories() {
    return {
        type: types.FETCHING_CATEGORIES
    }

}

function fetchingCategory() {
    return {
        type: types.FETCHING_CATEGORY
    }

}

function initializeCategory() {
    return {
        type: types.INITIALIZE_CATEGORY
    }

}

export function getAllCategories() {
    return function (dispatch) {
        console.log('dispatching FETCHING_CATEGORIES');
        dispatch(fetchingCategories());
        let api = new HotelApi();
        api.getAllCategories().then((categories) => {
            console.log('dispatching GET_CATEGORIES_SUCCESS');
            dispatch(getCategoriesSuccess(categories));
        }, error => {
            console.log('dispatching GET_CATEGORIES_FAILED');
            dispatch(getCategoriesFailed(error));
        });
    }
}

export function getAmenityCategories(amenityId) {
    return function (dispatch) {
        console.log('dispatching FETCHING_CATEGORIES');
        dispatch(fetchingCategories());
        let api = new HotelApi();
        return api.getAmenityCategories(amenityId).then(amenityCategories => {
            console.log('dispatching GET_CATEGORIES_SUCCESS', amenityCategories);
            dispatch(getCategoriesSuccess(amenityCategories));
            return amenityCategories;
        }, error => {
            console.log('dispatching GET_CATEGORIES_FAILED');
            dispatch(getCategoriesFailed(error));
            return error;
        });
    }
}

export function setCurrentCategory(category, includeData) {
    return function (dispatch) {
        console.log('dispatching FETCHING_CATEGORY');
        dispatch(fetchingCategory());
        if (includeData) {
            let api = new HotelApi();
            return api.getAmenitiesOfParent(category.id).then(amenities => {
                console.log('adding amenities data to category: ', amenities);
                category.data = amenities.data;
                console.log('dispatching SET_CURRENT_CATEGORY_SUCCESS with data', category);
                dispatch(setCurrentCategorySuccess(category));
                console.log('dispatching INITIALIZE_CATEGORY');
                dispatch(initializeCategory());
                return category;  // return category to allow accessing by chaining
            });
        }
        console.log('dispatching SET_CURRENT_CATEGORY_SUCCESS', category);
        dispatch(setCurrentCategorySuccess(category));
        console.log('dispatching INITIALIZE_CATEGORY');
        dispatch(initializeCategory());
        return Promise.resolve(category);
    }
}
