import * as types from './actionTypes.js'
import {HotelApi} from '../api/mockHotelApi'
import * as reduxStore from './actionHelpers'


function fetchingCoffeeShopResource() {
    console.log('dispatching FETCHING_COFFEE_SHOP_RESOURCE');
    return {
        type: types.FETCHING_COFFEE_SHOP_RESOURCE
    }

}

function fetchingCoffeeShopResources() {
    console.log('dispatching FETCHING_COFFEE_SHOP_RESOURCES');
    return {
        type: types.FETCHING_COFFEE_SHOP_RESOURCES
    }

}

function fetchingCoffeeShopCategories() {
    console.log('dispatching FETCHING_COFFEE_SHOP_CATEGORIES');
    return {
        type: types.FETCHING_COFFEE_SHOP_CATEGORIES
    }

}


function fetchingCoffeeShopCategory() {
    console.log('dispatching FETCHING_COFFEE_SHOP_CATEGORY');
    return {
        type: types.FETCHING_COFFEE_SHOP_CATEGORY
    }

}

function getCurrentCoffeeShopResourceSuccess(resource) {
    console.log('dispatching GET_CURRENT_COFFEE_SHOP_RESOURCE_SUCCESS');
    return {
        type: types.GET_CURRENT_COFFEE_SHOP_RESOURCE_SUCCESS,
        resource
    }
}

function getCurrentCoffeeShopResourceFailed(error) {
    console.log('dispatching GET_CURRENT_COFFEE_SHOP_RESOURCE_FAILED');
    return {
        type: types.GET_CURRENT_COFFEE_SHOP_RESOURCE_FAILED,
        error
    }
}

function getCoffeeShopResourcesSuccess(resources) {
    console.log('dispatching GET_COFFEE_SHOP_RESOURCES_SUCCESS');
    return {
        type: types.GET_COFFEE_SHOP_RESOURCES_SUCCESS,
        resources
    }
}

function getCoffeeShopResourcesFailed(error) {
    console.log('dispatching GET_COFFEE_SHOP_RESOURCES_FAILED');
    return {
        type: types.GET_COFFEE_SHOP_RESOURCES_FAILED,
        error
    }
}


function getCurrentCoffeeShopCategorySuccess(coffeeShopCategory) {
    console.log('dispatching GET_CURRENT_COFFEE_SHOP_CATEGORY_SUCCESS');
    return {
        type: types.GET_CURRENT_COFFEE_SHOP_CATEGORY_SUCCESS,
        coffeeShopCategory
    }
}

function getCurrentCoffeeShopCategoryFailed(error) {
    console.log('dispatching GET_CURRENT_COFFEE_SHOP_CATEGORY_FAILED');
    return {
        type: types.GET_CURRENT_COFFEE_SHOP_CATEGORY_FAILED,
        error
    }
}

function getCoffeeShopCategoriesSuccess(categories) {
    console.log('dispatching GET_COFFEE_SHOP_CATEGORIES_SUCCESS');
    return {
        type: types.GET_COFFEE_SHOP_CATEGORIES_SUCCESS,
        categories
    }
}


function getCoffeeShopCategoriesFailed(error) {
    console.log('dispatching GET_COFFEE_SHOP_CATEGORIES_FAILED');
    return {
        type: types.GET_COFFEE_SHOP_CATEGORIES_FAILED,
        error
    }
}


function setCurrentCoffeeShopCategorySuccess(category) {
    console.log('dispatching SET_CURRENT_COFFEE_SHOP_CATEGORY_SUCCESS', category);
    return {
        type: types.SET_CURRENT_COFFEE_SHOP_CATEGORY_SUCCESS,
        category
    }
}

function setCurrentCoffeeShopResourceSuccess(resource) {
    console.log('dispatching SET_CURRENT_COFFEE_SHOP_RESOURCE_SUCCESS', resource);
    return {
        type: types.SET_CURRENT_COFFEE_SHOP_RESOURCE_SUCCESS,
        resource
    }
}


function initializeCoffeeShopResource() {
    console.log('dispatching INITIALIZE_COFFEE_SHOP_RESOURCE');
    return {
        type: types.INITIALIZE_COFFEE_SHOP_RESOURCE
    }

}


export function getMainResource() {
    return function (dispatch) {
        dispatch(fetchingCoffeeShopResources());
        let api = new HotelApi('coffeeShops');
        api.getMainResource().then((resources) => {
            dispatch(getCoffeeShopResourcesSuccess(resources));
        }, error => {
            dispatch(getCoffeeShopResourcesFailed(error));
        });
    }
}

export function getAllCoffeeShopCategories(includeData) {
    return function (dispatch, getState) {
        let coffeeShopCategoriesInStore = getState().coffeeShopCategories;

        if (coffeeShopCategoriesInStore.data.length > 0) {
            dispatch(getCoffeeShopCategoriesSuccess(coffeeShopCategoriesInStore));
            return Promise.resolve(coffeeShopCategoriesInStore)
        }

        dispatch(fetchingCoffeeShopCategories());

        let api = new HotelApi('coffeeShops');
        return api.getResourcesByType('category', includeData).then((categories) => {
            dispatch(getCoffeeShopCategoriesSuccess(categories));
            return categories;
        }, error => {
            dispatch(getCoffeeShopCategoriesFailed(error));
        });
    }
}

export function getAllCoffeeShopResources() {
    return function (dispatch, getState) {
        let coffeeShopResourcesInStore = getState().coffeeShops;
        console.log('coffeeShop resources in store: ', coffeeShopResourcesInStore);
        if (coffeeShopResourcesInStore.data.length > 0) {
            console.log('found in store');
            dispatch(getCoffeeShopResourcesSuccess(coffeeShopResourcesInStore));
            return Promise.resolve(coffeeShopResourcesInStore)
        }

        dispatch(fetchingCoffeeShopResources());

        let api = new HotelApi('coffeeShops');
        return api.getResourcesByType('resource').then((resources) => {
            dispatch(getCoffeeShopResourcesSuccess(resources));
            return resources;
        }, error => {
            dispatch(getCoffeeShopResourcesSuccess(error));
        });
    }
}

export function getCoffeeShopCategoriesOfParent(categoryId, includeData) {
    return function (dispatch, getState) {
        dispatch(fetchingCoffeeShopCategories());
        let api = new HotelApi('coffeeShops');
        return api.getResourcesOfParent(categoryId, includeData, 'category').then(coffeeShopCategories => {
            dispatch(getCoffeeShopCategoriesSuccess(coffeeShopCategories));
            return coffeeShopCategories;  // return Promise to allow accessing category via chaining
        }, error => {
            dispatch(getCoffeeShopCategoriesFailed(error));
        });
    }

}

export function getCoffeeShopResourcesOfParent(categoryId, includeData) {
    return function (dispatch, getState) {
        dispatch(fetchingCoffeeShopResources());
        let api = new HotelApi('coffeeShops');
        return api.getResourcesOfParent(categoryId, includeData, 'resource').then(coffeeShopResources => {
            dispatch(getCoffeeShopResourcesSuccess(coffeeShopResources));
            return coffeeShopResources;  // return Promise to allow accessing category via chaining
        }, error => {
            dispatch(getCoffeeShopResourcesFailed(error));
        });
    }

}

export function getCoffeeShopCategoryBySlug(categorySlug, includeData) {
    return function (dispatch, getState) {
        let coffeeShopCategoriesInStore = getState().coffeeShopCategories;

        let coffeeShopCategoryFromStore = reduxStore.getResourceFromStoreBySlug(categorySlug, coffeeShopCategoriesInStore.data);

        if (coffeeShopCategoryFromStore) {
            console.log('found in store. dispatching GET_CURRENT_COFFEE_SHOP_CATEGORY_SUCCESS');
            dispatch(getCurrentCoffeeShopCategorySuccess(coffeeShopCategoryFromStore));
        }

        dispatch(fetchingCoffeeShopCategory());

        let api = new HotelApi('coffeeShops');
        return api.getResourceBySlug(categorySlug, includeData, 'resource').then(coffeeShopCategory => {
            dispatch(getCurrentCoffeeShopCategorySuccess(coffeeShopCategory));
            return coffeeShopCategory;
        }, error => {
            console.log('dispatching GET_CURRENT_COFFEE_SHOP_CATEGORY_FAILED');
            dispatch(getCurrentCoffeeShopCategoryFailed(error));
        });

    }
}

export function getCoffeeShopResourceBySlug(resourceSlug, includeData) {
    return function (dispatch, getState) {
        let coffeeShopsInStore = getState().coffeeShops;

        let coffeeShopItemFromStore = reduxStore.getResourceFromStoreBySlug(resourceSlug, coffeeShopsInStore.data);

        if (coffeeShopItemFromStore) {
            console.log('found in store. dispatching GET_CURRENT_COFFEE_SHOP_RESOURCE_SUCCESS');
            dispatch(getCurrentCoffeeShopResourceSuccess(coffeeShopItemFromStore));
        }

        dispatch(fetchingCoffeeShopResource());

        let api = new HotelApi('coffeeShops');
        return api.getResourceBySlug(resourceSlug, includeData, 'resource').then(coffeeShopItem => {

            dispatch(getCurrentCoffeeShopResourceSuccess(coffeeShopItem));
            return coffeeShopItem;
        }, error => {

            dispatch(getCurrentCoffeeShopResourceFailed(error));
        });

    }
}

export function setCurrentCoffeeShopCategory(category) {
    return function (dispatch) {
        dispatch(setCurrentCoffeeShopCategorySuccess(category));
        dispatch(initializeCoffeeShopCategory());
        return Promise.resolve(category); // return Promise to allow accessing category via chaining
    }
}

export function setCurrentCoffeeShopResource(resource, includeData) {
    return function (dispatch) {
        dispatch(setCurrentCoffeeShopResourceSuccess(resource));
        dispatch(initializeCoffeeShopResource());
        return Promise.resolve(resource); // return Promise to allow accessing category via chaining
    }
}


