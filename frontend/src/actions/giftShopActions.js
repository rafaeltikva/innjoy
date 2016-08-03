import * as types from './actionTypes.js'
import {HotelApi} from '../api/mockHotelApi'


function fetchingGiftShop() {
    return {
        type: types.FETCHING_GIFT_SHOP
    }

}

function fetchingGiftShopCategories() {
    return {
        type: types.FETCHING_GIFT_SHOP_CATEGORIES
    }

}

function fetchingGiftShopCategory() {
    return {
        type: types.FETCHING_GIFT_SHOP_CATEGORY
    }

}

function fetchingGiftShopCategoryResources() {
    return {
        type: types.FETCHING_GIFT_SHOP_CATEGORY_RESOURCES
    }

}

function getGiftShopCategoriesSuccess(categories) {
    return {
        type: types.GET_GIFT_SHOP_CATEGORIES_SUCCESS,
        categories
    }
}


function getGiftShopCategoriesFailed(error) {
    return {
        type: types.GET_GIFT_SHOP_CATEGORIES_FAILED,
        error
    }
}

function getCurrentGiftShopCategoryResourcesSuccess(resources) {
    return {
        type: types.GET_CURRENT_GIFT_SHOP_CATEGORY_RESOURCES_SUCCESS,
        resources
    }
}


function getCurrentGiftShopCategoryResourcesFailed(error) {
    return {
        type: types.GET_CURRENT_GIFT_SHOP_CATEGORY_RESOURCES_FAILED,
        error
    }
}


function setCurrentGiftShopCategorySuccess(category) {
    return {
        type: types.SET_CURRENT_GIFT_SHOP_CATEGORY_SUCCESS,
        category
    }
}

function initializeGiftShop() {
    return {
        type: types.INITIALIZE_GIFT_SHOP
    }

}

function setCurrentGiftShopCategorySuccess(category) {
    return {
        type: types.SET_CURRENT_GIFT_SHOP_CATEGORY_SUCCESS,
        category
    }
}


function initializeGiftShopCategory() {
    return {
        type: types.INITIALIZE_GIFT_SHOP_CATEGORY
    }

}

export function getMainResource() {
    return function (dispatch) {
        console.log('dispatching FETCHING_GIFT_SHOP_RESOURCES');
        dispatch(fetchingGiftShopResources());
        let api = new HotelApi('giftShop');
        api.getMainResource().then((resources) => {
            console.log('dispatching GET_GIFT_SHOP_RESOURCES_SUCCESS');
            dispatch(getGiftShopResourcesSuccess(resources));
        }, error => {
            console.log('dispatching GET_GIFT_SHOP_RESOURCES_FAILED');
            dispatch(getGiftShopResourcesFailed(error));
        });
    }
}


export function getCurrentGiftShopCategory(categorySlug) {
    return function (dispatch) {
        console.log('dispatching FETCHING_GIFT_SHOP');
        dispatch(fetchingGiftShop());
        let api = new HotelApi('giftShop');
        return api.getCurrentResource(categorySlug).then(category => {
            console.log('dispatching GET_CURRENT_GIFT_SHOP_SUCCESS');
            dispatch(getCurrentGiftShopSuccess(category));
            console.log('dispatching INITIALIZE_GIFT_SHOP');
            dispatch(initializeGiftShop());
            return category; // returning the category to be pass it to next promise chain
        }, error => {
            console.log('dispatching GET_CURRENT_GIFT_SHOP_FAILED');
            dispatch(getGiftShopResourcesFailed(error));
        });

    }
}

export function getAllGiftShopCategories() {
    return function (dispatch) {
        console.log('dispatching FETCHING_GIFT_SHOP_CATEGORIES');
        dispatch(fetchingGiftShopCategories());
        let api = new HotelApi('giftShop');
        return api.getAllCategories().then((categories) => {
            console.log('dispatching GET_GIFT_SHOP_CATEGORIES_SUCCESS');
            dispatch(getGiftShopCategoriesSuccess(categories));
            return categories;
        }, error => {
            console.log('dispatching GET_GIFT_SHOP_CATEGORIES_FAILED');
            dispatch(getGiftShopCategoriesFailed(error));
        });
    }
}

export function getCurrentGiftShopCategoryResources(categoryId) {
    return function (dispatch, getState) {
        console.log('dispatching FETCHING_GIFT_SHOP_CATEGORY_RESOURCES');
        dispatch(fetchingGiftShopCategoryResources());
        let api = new HotelApi('giftShop');
        return api.getResourcesOfParent(categoryId).then(resources => {
            console.log('dispatching GET_CURRENT_GIFT_SHOP_CATEGORY_RESOURCES_SUCCESS');
            dispatch(getCurrentGiftShopCategoryResourcesSuccess(resources));
            return resources;  // return Promise to allow accessing category via chaining
        }, error => {
            console.log('dispatching GET_CURRENT_GIFT_SHOP_CATEGORY_RESOURCES_FAILED');
            dispatch(getCurrentGiftShopCategoryResourcesFailed(error));
        });
    }

}

export function setCurrentGiftShopCategory(category, includeData) {
    return function (dispatch) {
        console.log('dispatching FETCHING_GIFT_SHOP_CATEGORY');
        dispatch(fetchingGiftShopCategory());
        if (includeData) {
            return dispatch(getCurrentGiftShopCategoryResources(category.id)).then(resources => {
                console.log('the resources returned from current category: ', resources);
                category.data = resources.data;
                console.log('dispatching SET_CURRENT_GIFT_SHOP_CATEGORY_SUCCESS', category);
                dispatch(setCurrentGiftShopCategorySuccess(category));
                console.log('dispatching INITIALIZE_GIFT_SHOP_CATEGORY');
                dispatch(initializeGiftShopCategory());
                return category;
            });
        }
        console.log('dispatching SET_CURRENT_GIFT_SHOP_CATEGORY_SUCCESS', category);
        dispatch(setCurrentGiftShopCategorySuccess(category));
        console.log('dispatching INITIALIZE_GIFT_SHOP_CATEGORY');
        dispatch(initializeGiftShopCategory());
        return Promise.resolve(category); // return Promise to allow accessing category via chaining
    }
}


