import * as types from './actionTypes.js'
import {HotelApi} from '../api/mockHotelApi'
import * as reduxStore from './actionHelpers'


function fetchingRestaurantResource() {
    console.log('dispatching FETCHING_RESTAURANT_RESOURCE');
    return {
        type: types.FETCHING_RESTAURANT_RESOURCE
    }

}

function fetchingRestaurantResources() {
    console.log('dispatching FETCHING_RESTAURANT_RESOURCES');
    return {
        type: types.FETCHING_RESTAURANT_RESOURCES
    }

}

function fetchingRestaurantCategories() {
    console.log('dispatching FETCHING_RESTAURANT_CATEGORIES');
    return {
        type: types.FETCHING_RESTAURANT_CATEGORIES
    }

}


function fetchingRestaurantCategory() {
    console.log('dispatching FETCHING_RESTAURANT_CATEGORY');
    return {
        type: types.FETCHING_RESTAURANT_CATEGORY
    }

}

function getCurrentRestaurantResourceSuccess(resource) {
    console.log('dispatching GET_CURRENT_RESTAURANT_RESOURCE_SUCCESS');
    return {
        type: types.GET_CURRENT_RESTAURANT_RESOURCE_SUCCESS,
        resource
    }
}

function getCurrentRestaurantResourceFailed(error) {
    console.log('dispatching GET_CURRENT_RESTAURANT_RESOURCE_FAILED');
    return {
        type: types.GET_CURRENT_RESTAURANT_RESOURCE_FAILED,
        error
    }
}

function getRestaurantResourcesSuccess(resources) {
    console.log('dispatching GET_RESTAURANT_RESOURCES_SUCCESS');
    return {
        type: types.GET_RESTAURANT_RESOURCES_SUCCESS,
        resources
    }
}

function getRestaurantResourcesFailed(error) {
    console.log('dispatching GET_RESTAURANT_RESOURCES_FAILED');
    return {
        type: types.GET_RESTAURANT_RESOURCES_FAILED,
        error
    }
}


function getCurrentRestaurantCategorySuccess(restaurantCategory) {
    console.log('dispatching GET_CURRENT_RESTAURANT_CATEGORY_SUCCESS');
    return {
        type: types.GET_CURRENT_RESTAURANT_CATEGORY_SUCCESS,
        restaurantCategory
    }
}

function getCurrentRestaurantCategoryFailed(error) {
    console.log('dispatching GET_CURRENT_RESTAURANT_CATEGORY_FAILED');
    return {
        type: types.GET_CURRENT_RESTAURANT_CATEGORY_FAILED,
        error
    }
}

function getRestaurantCategoriesSuccess(categories) {
    console.log('dispatching GET_RESTAURANT_CATEGORIES_SUCCESS');
    return {
        type: types.GET_RESTAURANT_CATEGORIES_SUCCESS,
        categories
    }
}


function getRestaurantCategoriesFailed(error) {
    console.log('dispatching GET_RESTAURANT_CATEGORIES_FAILED');
    return {
        type: types.GET_RESTAURANT_CATEGORIES_FAILED,
        error
    }
}


function setCurrentRestaurantCategorySuccess(category) {
    console.log('dispatching SET_CURRENT_RESTAURANT_CATEGORY_SUCCESS', category);
    return {
        type: types.SET_CURRENT_RESTAURANT_CATEGORY_SUCCESS,
        category
    }
}

function setCurrentRestaurantResourceSuccess(resource) {
    console.log('dispatching SET_CURRENT_RESTAURANT_RESOURCE_SUCCESS', resource);
    return {
        type: types.SET_CURRENT_RESTAURANT_RESOURCE_SUCCESS,
        resource
    }
}


function initializeRestaurantResource() {
    console.log('dispatching INITIALIZE_RESTAURANT_RESOURCE');
    return {
        type: types.INITIALIZE_RESTAURANT_RESOURCE
    }

}


export function getMainResource() {
    return function (dispatch) {
        dispatch(fetchingRestaurantResources());
        let api = new HotelApi('restaurants');
        api.getMainResource().then((resources) => {
            dispatch(getRestaurantResourcesSuccess(resources));
        }, error => {
            dispatch(getRestaurantResourcesFailed(error));
        });
    }
}

export function getAllRestaurantCategories(includeData) {
    return function (dispatch, getState) {
        let restaurantCategoriesInStore = getState().restaurantCategories;

        if (restaurantCategoriesInStore.data.length > 0) {
            dispatch(getRestaurantCategoriesSuccess(restaurantCategoriesInStore));
            return Promise.resolve(restaurantCategoriesInStore)
        }

        dispatch(fetchingRestaurantCategories());

        let api = new HotelApi('restaurants');
        return api.getResourcesByType('category', includeData).then((categories) => {
            dispatch(getRestaurantCategoriesSuccess(categories));
            return categories;
        }, error => {
            dispatch(getRestaurantCategoriesFailed(error));
        });
    }
}

export function getAllRestaurantResources() {
    return function (dispatch, getState) {
        let restaurantResourcesInStore = getState().restaurants;
        console.log('restaurant resources in store: ', restaurantResourcesInStore);

        if (restaurantResourcesInStore.data.length > 0) {
            console.log('found in store');
            dispatch(getRestaurantResourcesSuccess(restaurantResourcesInStore));
            return Promise.resolve(restaurantResourcesInStore)
        }

        dispatch(fetchingRestaurantResources());

        let api = new HotelApi('restaurants');
        return api.getResourcesByType('resource').then((resources) => {
            dispatch(getRestaurantResourcesSuccess(resources));
            return resources;
        }, error => {
            dispatch(getRestaurantResourcesSuccess(error));
        });
    }
}

export function getRestaurantCategoriesOfParent(categoryId, includeData) {
    return function (dispatch, getState) {
        dispatch(fetchingRestaurantCategories());
        let api = new HotelApi('restaurants');
        return api.getResourcesOfParent(categoryId, includeData, 'category').then(restaurantCategories => {
            dispatch(getRestaurantCategoriesSuccess(restaurantCategories));
            return restaurantCategories;  // return Promise to allow accessing category via chaining
        }, error => {
            dispatch(getRestaurantCategoriesFailed(error));
        });
    }

}

export function getRestaurantResourcesOfParent(categoryId, includeData) {
    return function (dispatch, getState) {
        dispatch(fetchingRestaurantResources());
        let api = new HotelApi('restaurants');
        return api.getResourcesOfParent(categoryId, includeData, 'resource').then(restaurantResources => {
            dispatch(getRestaurantResourcesSuccess(restaurantResources));
            return restaurantResources;  // return Promise to allow accessing category via chaining
        }, error => {
            dispatch(getRestaurantResourcesFailed(error));
        });
    }

}

export function getRestaurantCategoryBySlug(categorySlug, includeData) {
    return function (dispatch, getState) {
        let restaurantCategoriesInStore = getState().restaurantCategories;

        let restaurantCategoryFromStore = reduxStore.getResourceFromStoreBySlug(categorySlug, restaurantCategoriesInStore.data);

        if (restaurantCategoryFromStore) {
            console.log('found in store. dispatching GET_CURRENT_RESTAURANT_CATEGORY_SUCCESS');
            dispatch(getCurrentRestaurantCategorySuccess(restaurantCategoryFromStore));
        }

        dispatch(fetchingRestaurantCategory());

        let api = new HotelApi('restaurants');
        return api.getResourceBySlug(categorySlug, includeData, 'resource').then(restaurantCategory => {
            dispatch(getCurrentRestaurantCategorySuccess(restaurantCategory));
            return restaurantCategory;
        }, error => {
            console.log('dispatching GET_CURRENT_RESTAURANT_CATEGORY_FAILED');
            dispatch(getCurrentRestaurantCategoryFailed(error));
        });

    }
}

export function getRestaurantResourceBySlug(resourceSlug, includeData) {
    return function (dispatch, getState) {
        let restaurantsInStore = getState().restaurants;

        let restaurantItemFromStore = reduxStore.getResourceFromStoreBySlug(resourceSlug, restaurantsInStore.data);

        if (restaurantItemFromStore) {
            console.log('found in store. dispatching GET_CURRENT_RESTAURANT_RESOURCE_SUCCESS');
            dispatch(getCurrentRestaurantResourceSuccess(restaurantItemFromStore));
        }

        dispatch(fetchingRestaurantResource());

        let api = new HotelApi('restaurants');
        return api.getResourceBySlug(resourceSlug, includeData, 'resource').then(restaurantItem => {

            dispatch(getCurrentRestaurantResourceSuccess(restaurantItem));
            return restaurantItem;
        }, error => {

            dispatch(getCurrentRestaurantResourceFailed(error));
        });

    }
}

export function setCurrentRestaurantCategory(category) {
    return function (dispatch) {
        dispatch(setCurrentRestaurantCategorySuccess(category));
        dispatch(initializeRestaurantCategory());
        return Promise.resolve(category); // return Promise to allow accessing category via chaining
    }
}

export function setCurrentRestaurantResource(resource, includeData) {
    return function (dispatch) {
        dispatch(setCurrentRestaurantResourceSuccess(resource));
        dispatch(initializeRestaurantResource());
        return Promise.resolve(resource); // return Promise to allow accessing category via chaining
    }
}


