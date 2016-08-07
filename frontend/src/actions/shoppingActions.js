import * as types from './actionTypes.js'
import {HotelApi} from '../api/mockHotelApi'
import * as reduxStore from './actionHelpers'


function fetchingShoppingResource() {
    console.log('dispatching FETCHING_SHOPPING_RESOURCE');
    return {
        type: types.FETCHING_SHOPPING_RESOURCE
    }

}

function fetchingShoppingResources() {
    console.log('dispatching FETCHING_SHOPPING_RESOURCES');
    return {
        type: types.FETCHING_SHOPPING_RESOURCES
    }

}

function fetchingShoppingCategories() {
    console.log('dispatching FETCHING_SHOPPING_CATEGORIES');
    return {
        type: types.FETCHING_SHOPPING_CATEGORIES
    }

}


function fetchingShoppingCategory() {
    console.log('dispatching FETCHING_SHOPPING_CATEGORY');
    return {
        type: types.FETCHING_SHOPPING_CATEGORY
    }

}

function getCurrentShoppingResourceSuccess(resource) {
    console.log('dispatching GET_CURRENT_SHOPPING_RESOURCE_SUCCESS');
    return {
        type: types.GET_CURRENT_SHOPPING_RESOURCE_SUCCESS,
        resource
    }
}

function getCurrentShoppingResourceFailed(error) {
    console.log('dispatching GET_CURRENT_SHOPPING_RESOURCE_FAILED');
    return {
        type: types.GET_CURRENT_SHOPPING_RESOURCE_FAILED,
        error
    }
}

function getShoppingResourcesSuccess(resources) {
    console.log('dispatching GET_SHOPPING_RESOURCES_SUCCESS');
    return {
        type: types.GET_SHOPPING_RESOURCES_SUCCESS,
        resources
    }
}

function getShoppingResourcesFailed(error) {
    console.log('dispatching GET_SHOPPING_RESOURCES_FAILED');
    return {
        type: types.GET_SHOPPING_RESOURCES_FAILED,
        error
    }
}


function getCurrentShoppingCategorySuccess(shoppingCategory) {
    console.log('dispatching GET_CURRENT_SHOPPING_CATEGORY_SUCCESS');
    return {
        type: types.GET_CURRENT_SHOPPING_CATEGORY_SUCCESS,
        shoppingCategory
    }
}

function getCurrentShoppingCategoryFailed(error) {
    console.log('dispatching GET_CURRENT_SHOPPING_CATEGORY_FAILED');
    return {
        type: types.GET_CURRENT_SHOPPING_CATEGORY_FAILED,
        error
    }
}

function getShoppingCategoriesSuccess(categories) {
    console.log('dispatching GET_SHOPPING_CATEGORIES_SUCCESS');
    return {
        type: types.GET_SHOPPING_CATEGORIES_SUCCESS,
        categories
    }
}


function getShoppingCategoriesFailed(error) {
    console.log('dispatching GET_SHOPPING_CATEGORIES_FAILED');
    return {
        type: types.GET_SHOPPING_CATEGORIES_FAILED,
        error
    }
}


function setCurrentShoppingCategorySuccess(category) {
    console.log('dispatching SET_CURRENT_SHOPPING_CATEGORY_SUCCESS', category);
    return {
        type: types.SET_CURRENT_SHOPPING_CATEGORY_SUCCESS,
        category
    }
}

function setCurrentShoppingResourceSuccess(resource) {
    console.log('dispatching SET_CURRENT_SHOPPING_RESOURCE_SUCCESS', resource);
    return {
        type: types.SET_CURRENT_SHOPPING_RESOURCE_SUCCESS,
        resource
    }
}


function initializeShoppingResource() {
    console.log('dispatching INITIALIZE_SHOPPING_RESOURCE');
    return {
        type: types.INITIALIZE_SHOPPING_RESOURCE
    }

}


export function getMainResource() {
    return function (dispatch) {
        dispatch(fetchingShoppingResources());
        let api = new HotelApi('shopping');
        api.getMainResource().then((resources) => {
            dispatch(getShoppingResourcesSuccess(resources));
        }, error => {
            dispatch(getShoppingResourcesFailed(error));
        });
    }
}

export function getAllShoppingCategories(includeData) {
    return function (dispatch, getState) {
        let shoppingCategoriesInStore = getState().shoppingCategories;

        if (shoppingCategoriesInStore.data.length > 0) {
            dispatch(getShoppingCategoriesSuccess(shoppingCategoriesInStore));
            return Promise.resolve(shoppingCategoriesInStore)
        }

        dispatch(fetchingShoppingCategories());

        let api = new HotelApi('shopping');
        return api.getResourcesByType('category', includeData).then((categories) => {
            dispatch(getShoppingCategoriesSuccess(categories));
            return categories;
        }, error => {
            dispatch(getShoppingCategoriesFailed(error));
        });
    }
}

export function getAllShoppingResources() {
    return function (dispatch, getState) {
        let shoppingResourcesInStore = getState().shoppingResources;
        console.log('shopping resources in store: ', shoppingResourcesInStore);
        if (shoppingResourcesInStore.data.length > 0) {
            console.log('found in store');
            dispatch(getShoppingResourcesSuccess(shoppingResourcesInStore));
            return Promise.resolve(shoppingResourcesInStore)
        }

        dispatch(fetchingShoppingResources());

        let api = new HotelApi('shopping');
        return api.getResourcesByType('resource').then((resources) => {
            dispatch(getShoppingResourcesSuccess(resources));
            return resources;
        }, error => {
            dispatch(getShoppingResourcesSuccess(error));
        });
    }
}

export function getShoppingCategoriesOfParent(categoryId, includeData) {
    return function (dispatch, getState) {
        dispatch(fetchingShoppingCategories());
        let api = new HotelApi('shopping');
        return api.getResourcesOfParent(categoryId, includeData, 'category').then(shoppingCategories => {
            dispatch(getShoppingCategoriesSuccess(shoppingCategories));
            return shoppingCategories;  // return Promise to allow accessing category via chaining
        }, error => {
            dispatch(getShoppingCategoriesFailed(error));
        });
    }

}

export function getShoppingResourcesOfParent(categoryId, includeData) {
    return function (dispatch, getState) {
        dispatch(fetchingShoppingResources());
        let api = new HotelApi('shopping');
        return api.getResourcesOfParent(categoryId, includeData, 'resource').then(shoppingResources => {
            dispatch(getShoppingResourcesSuccess(shoppingResources));
            return shoppingResources;  // return Promise to allow accessing category via chaining
        }, error => {
            dispatch(getShoppingResourcesFailed(error));
        });
    }

}

export function getShoppingCategoryBySlug(categorySlug, includeData) {
    return function (dispatch, getState) {
        let shoppingCategoriesInStore = getState().shoppingCategories;

        let shoppingCategoryFromStore = reduxStore.getResourceFromStoreBySlug(categorySlug, shoppingCategoriesInStore.data);

        if (shoppingCategoryFromStore) {
            console.log('found in store. dispatching GET_CURRENT_SHOPPING_CATEGORY_SUCCESS');
            dispatch(getCurrentShoppingCategorySuccess(shoppingCategoryFromStore));
        }

        dispatch(fetchingShoppingCategory());

        let api = new HotelApi('shopping');
        return api.getResourceBySlug(categorySlug, includeData, 'resource').then(shoppingCategory => {
            dispatch(getCurrentShoppingCategorySuccess(shoppingCategory));
            return shoppingCategory;
        }, error => {
            console.log('dispatching GET_CURRENT_SHOPPING_CATEGORY_FAILED');
            dispatch(getCurrentShoppingCategoryFailed(error));
        });

    }
}

export function getShoppingResourceBySlug(resourceSlug, includeData) {
    return function (dispatch, getState) {
        let shoppingResourcesInStore = getState().shoppingResources;

        let shoppingResourceFromStore = reduxStore.getResourceFromStoreBySlug(resourceSlug, shoppingResourcesInStore.data);

        if (shoppingResourceFromStore) {
            console.log('found in store. dispatching GET_CURRENT_SHOPPING_RESOURCE_SUCCESS');
            dispatch(getCurrentShoppingResourceSuccess(shoppingResourceFromStore));
        }

        dispatch(fetchingShoppingResource());

        let api = new HotelApi('shopping');
        return api.getResourceBySlug(resourceSlug, includeData, 'resource').then(shoppingResource => {

            dispatch(getCurrentShoppingResourceSuccess(shoppingResource));
            return shoppingResource;
        }, error => {

            dispatch(getCurrentShoppingResourceFailed(error));
        });

    }
}

export function setCurrentShoppingCategory(category) {
    return function (dispatch) {
        dispatch(setCurrentShoppingCategorySuccess(category));
        dispatch(initializeShoppingCategory());
        return Promise.resolve(category); // return Promise to allow accessing category via chaining
    }
}

export function setCurrentShoppingResource(resource, includeData) {
    return function (dispatch) {
        dispatch(setCurrentShoppingResourceSuccess(resource));
        dispatch(initializeShoppingResource());
        return Promise.resolve(resource); // return Promise to allow accessing category via chaining
    }
}


