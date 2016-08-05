import * as types from './actionTypes.js'
import {HotelApi} from '../api/mockHotelApi'
import * as reduxStore from './actionHelpers'


function fetchingGiftShopResource() {
    return {
        type: types.FETCHING_GIFT_SHOP_RESOURCE
    }

}

function fetchingGiftShopResources() {
    return {
        type: types.FETCHING_GIFT_SHOP_RESOURCES
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

function getCurrentGiftShopResourceSuccess(resource) {
    return {
        type: types.GET_CURRENT_GIFT_SHOP_RESOURCE_SUCCESS,
        resource
    }
}

function getCurrentGiftShopResourceFailed(error) {
    return {
        type: types.GET_CURRENT_GIFT_SHOP_RESOURCE_FAILED,
        error
    }
}

function getGiftShopResourcesSuccess(resources) {
    return {
        type: types.GET_GIFT_SHOP_RESOURCES_SUCCESS,
        resources
    }
}


function getGiftShopResourcesFailed(error) {
    return {
        type: types.GET_GIFT_SHOP_RESOURCES_FAILED,
        error
    }
}


function getCurrentGiftShopCategorySuccess(giftShopCategory) {
    return {
        type: types.GET_CURRENT_GIFT_SHOP_CATEGORY_SUCCESS,
        giftShopCategory
    }
}

function getCurrentGiftShopCategoryFailed(error) {
    return {
        type: types.GET_CURRENT_GIFT_SHOP_CATEGORY_FAILED,
        error
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


function setCurrentGiftShopCategorySuccess(category) {
    return {
        type: types.SET_CURRENT_GIFT_SHOP_CATEGORY_SUCCESS,
        category
    }
}

function setCurrentGiftShopResourceSuccess(resource) {
    return {
        type: types.SET_CURRENT_GIFT_SHOP_RESOURCE_SUCCESS,
        resource
    }
}


function initializeGiftShop() {
    return {
        type: types.INITIALIZE_GIFT_SHOP
    }

}


function initializeGiftShopCategory() {
    return {
        type: types.INITIALIZE_GIFT_SHOP_CATEGORY
    }

}

function initializeGiftShopResource() {
    return {
        type: types.INITIALIZE_GIFT_SHOP_RESOURCE
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

export function getAllGiftShopCategories(includeData) {
    return function (dispatch, getState) {
        let giftShopCategoriesInStore = getState().giftShopCategories;
        console.log('gift shop categories in store: ', giftShopCategoriesInStore);

        if (giftShopCategoriesInStore.data.length > 0) {
            console.log('found in store. dispatching GET_GIFT_SHOP_CATEGORIES_SUCCESS');
            dispatch(getGiftShopCategoriesSuccess(giftShopCategoriesInStore));
            return Promise.resolve(giftShopCategoriesInStore)
        }

        console.log('dispatching FETCHING_GIFT_SHOP_CATEGORIES');
        dispatch(fetchingGiftShopCategories());

        let api = new HotelApi('giftShop');
        return api.getResourcesByType('category', includeData).then((categories) => {
            console.log('dispatching GET_GIFT_SHOP_CATEGORIES_SUCCESS');
            dispatch(getGiftShopCategoriesSuccess(categories));
            return categories;
        }, error => {
            console.log('dispatching GET_GIFT_SHOP_CATEGORIES_FAILED');
            dispatch(getGiftShopCategoriesFailed(error));
        });
    }
}

export function getGiftShopCategoriesOfParent(categoryId, includeData) {
    return function (dispatch, getState) {
        console.log('dispatching FETCHING_GIFT_SHOP_RESOURCES');
        dispatch(fetchingGiftShopCategories());
        let api = new HotelApi('giftShop');
        return api.getResourcesOfParent(categoryId, includeData, 'category').then(giftShopCategories => {
            console.log('dispatching GET_GIFT_SHOP_CATEGORIES_SUCCESS');
            dispatch(getGiftShopCategoriesSuccess(giftShopCategories));
            return giftShopCategories;  // return Promise to allow accessing category via chaining
        }, error => {
            console.log('dispatching GET_GIFT_SHOP_CATEGORY_RESOURCES_FAILED');
            dispatch(getGiftShopCategoriesFailed(error));
        });
    }

}

export function getGiftShopResourcesOfParent(categoryId, includeData) {
    return function (dispatch, getState) {
        console.log('dispatching FETCHING_GIFT_SHOP_RESOURCES');
        dispatch(fetchingGiftShopResources());
        let api = new HotelApi('giftShop');
        return api.getResourcesOfParent(categoryId, includeData, 'resource').then(giftShopResources => {
            console.log('dispatching GET_GIFT_SHOP_RESOURCES_SUCCESS');
            dispatch(getGiftShopResourcesSuccess(giftShopResources));
            return giftShopResources;  // return Promise to allow accessing category via chaining
        }, error => {
            console.log('dispatching GET_GIFT_SHOP_RESOURCES_FAILED');
            dispatch(getGiftShopResourcesFailed(error));
        });
    }

}

export function getGiftShopCategoryBySlug(categorySlug, includeData) {
    return function (dispatch, getState) {
        let giftShopCategoriesInStore = getState().giftShopCategories;

        let giftShopCategoryFromStore = reduxStore.getResourceFromStoreBySlug(categorySlug, giftShopCategoriesInStore.data);

        if (giftShopCategoryFromStore) {
            console.log('found in store. dispatching GET_CURRENT_GIFT_SHOP_CATEGORY_SUCCESS');
            dispatch(getCurrentGiftShopCategorySuccess(giftShopCategoryFromStore));
        }

        console.log('dispatching FETCHING_GIFT_SHOP_CATEGORY');
        dispatch(fetchingGiftShopCategory());

        let api = new HotelApi('giftShop');
        return api.getResourceBySlug(categorySlug, includeData, 'resource').then(giftShopCategory => {
            console.log('dispatching GET_CURRENT_GIFT_SHOP_CATEGORY_SUCCESS');
            dispatch(getCurrentGiftShopCategorySuccess(giftShopCategory));
            return giftShopCategory;
        }, error => {
            console.log('dispatching GET_CURRENT_GIFT_SHOP_CATEGORY_FAILED');
            dispatch(getCurrentGiftShopCategoryFailed(error));
        });

    }
}

export function getGiftShopResourceBySlug(resourceSlug, includeData) {
    return function (dispatch, getState) {
        let giftShopItemsInStore = getState().giftShopResources;

        let giftShopItemFromStore = reduxStore.getResourceFromStoreBySlug(resourceSlug, giftShopItemsInStore.data);

        if (giftShopItemFromStore) {
            console.log('found in store. dispatching GET_CURRENT_GIFT_SHOP_RESOURCE_SUCCESS');
            dispatch(getCurrentGiftShopResourceSuccess(giftShopItemFromStore));
        }

        console.log('dispatching FETCHING_GIFT_SHOP_RESOURCE');
        dispatch(fetchingGiftShopResource());

        let api = new HotelApi('giftShop');
        return api.getResourceBySlug(resourceSlug, includeData, 'resource').then(giftShopItem => {
            console.log('dispatching GET_CURRENT_GIFT_SHOP_RESOURCE_SUCCESS');
            dispatch(getCurrentGiftShopResourceSuccess(giftShopItem));
            return giftShopItem;
        }, error => {
            console.log('dispatching GET_CURRENT_GIFT_SHOP_RESOURCE_FAILED');
            dispatch(getCurrentGiftShopResourceFailed(error));
        });

    }
}

export function setCurrentGiftShopCategory(category) {
    return function (dispatch) {
        console.log('dispatching SET_CURRENT_GIFT_SHOP_CATEGORY_SUCCESS', category);
        dispatch(setCurrentGiftShopCategorySuccess(category));
        console.log('dispatching INITIALIZE_GIFT_SHOP_CATEGORY');
        dispatch(initializeGiftShopCategory());
        return Promise.resolve(category); // return Promise to allow accessing category via chaining
    }
}

export function setCurrentGiftShopResource(resource, includeData) {
    return function (dispatch) {
        console.log('dispatching SET_CURRENT_GIFT_SHOP_RESOURCE_SUCCESS', resource);
        dispatch(setCurrentGiftShopResourceSuccess(resource));
        console.log('dispatching INITIALIZE_GIFT_SHOP_RESOURCE');
        dispatch(initializeGiftShopResource());
        return Promise.resolve(resource); // return Promise to allow accessing category via chaining
    }
}


