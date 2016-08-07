import * as types from './actionTypes.js'
import {HotelApi} from '../api/mockHotelApi'
import * as reduxStore from './actionHelpers'


function fetchingFunResource() {
    console.log('dispatching FETCHING_FUN_RESOURCE');
    return {
        type: types.FETCHING_FUN_RESOURCE
    }

}

function fetchingFunResources() {
    console.log('dispatching FETCHING_FUN_RESOURCES');
    return {
        type: types.FETCHING_FUN_RESOURCES
    }

}

function fetchingFunCategories() {
    console.log('dispatching FETCHING_FUN_CATEGORIES');
    return {
        type: types.FETCHING_FUN_CATEGORIES
    }

}


function fetchingFunCategory() {
    console.log('dispatching FETCHING_FUN_CATEGORY');
    return {
        type: types.FETCHING_FUN_CATEGORY
    }

}

function getCurrentFunResourceSuccess(resource) {
    console.log('dispatching GET_CURRENT_FUN_RESOURCE_SUCCESS');
    return {
        type: types.GET_CURRENT_FUN_RESOURCE_SUCCESS,
        resource
    }
}

function getCurrentFunResourceFailed(error) {
    console.log('dispatching GET_CURRENT_FUN_RESOURCE_FAILED');
    return {
        type: types.GET_CURRENT_FUN_RESOURCE_FAILED,
        error
    }
}

function getFunResourcesSuccess(resources) {
    console.log('dispatching GET_FUN_RESOURCES_SUCCESS');
    return {
        type: types.GET_FUN_RESOURCES_SUCCESS,
        resources
    }
}

function getFunResourcesFailed(error) {
    console.log('dispatching GET_FUN_RESOURCES_FAILED');
    return {
        type: types.GET_FUN_RESOURCES_FAILED,
        error
    }
}


function getCurrentFunCategorySuccess(funCategory) {
    console.log('dispatching GET_CURRENT_FUN_CATEGORY_SUCCESS');
    return {
        type: types.GET_CURRENT_FUN_CATEGORY_SUCCESS,
        funCategory
    }
}

function getCurrentFunCategoryFailed(error) {
    console.log('dispatching GET_CURRENT_FUN_CATEGORY_FAILED');
    return {
        type: types.GET_CURRENT_FUN_CATEGORY_FAILED,
        error
    }
}

function getFunCategoriesSuccess(categories) {
    console.log('dispatching GET_FUN_CATEGORIES_SUCCESS');
    return {
        type: types.GET_FUN_CATEGORIES_SUCCESS,
        categories
    }
}


function getFunCategoriesFailed(error) {
    console.log('dispatching GET_FUN_CATEGORIES_FAILED');
    return {
        type: types.GET_FUN_CATEGORIES_FAILED,
        error
    }
}


function setCurrentFunCategorySuccess(category) {
    console.log('dispatching SET_CURRENT_FUN_CATEGORY_SUCCESS', category);
    return {
        type: types.SET_CURRENT_FUN_CATEGORY_SUCCESS,
        category
    }
}

function setCurrentFunResourceSuccess(resource) {
    console.log('dispatching SET_CURRENT_FUN_RESOURCE_SUCCESS', resource);
    return {
        type: types.SET_CURRENT_FUN_RESOURCE_SUCCESS,
        resource
    }
}


function initializeFunResource() {
    console.log('dispatching INITIALIZE_FUN_RESOURCE');
    return {
        type: types.INITIALIZE_FUN_RESOURCE
    }

}


export function getMainResource() {
    return function (dispatch) {
        dispatch(fetchingFunResources());
        let api = new HotelApi('fun');
        api.getMainResource().then((resources) => {
            dispatch(getFunResourcesSuccess(resources));
        }, error => {
            dispatch(getFunResourcesFailed(error));
        });
    }
}

export function getAllFunCategories(includeData) {
    return function (dispatch, getState) {
        let funCategoriesInStore = getState().funCategories;

        if (funCategoriesInStore.data.length > 0) {
            dispatch(getFunCategoriesSuccess(funCategoriesInStore));
            return Promise.resolve(funCategoriesInStore)
        }

        dispatch(fetchingFunCategories());

        let api = new HotelApi('fun');
        return api.getResourcesByType('category', includeData).then((categories) => {
            dispatch(getFunCategoriesSuccess(categories));
            return categories;
        }, error => {
            dispatch(getFunCategoriesFailed(error));
        });
    }
}

export function getAllFunResources() {
    return function (dispatch, getState) {
        let funResourcesInStore = getState().funResources;
        console.log('fun resources in store: ', funResourcesInStore);
        if (funResourcesInStore.data.length > 0) {
            console.log('found in store');
            dispatch(getFunResourcesSuccess(funResourcesInStore));
            return Promise.resolve(funResourcesInStore)
        }

        dispatch(fetchingFunResources());

        let api = new HotelApi('fun');
        return api.getResourcesByType('resource').then((resources) => {
            dispatch(getFunResourcesSuccess(resources));
            return resources;
        }, error => {
            dispatch(getFunResourcesSuccess(error));
        });
    }
}

export function getFunCategoriesOfParent(categoryId, includeData) {
    return function (dispatch, getState) {
        dispatch(fetchingFunCategories());
        let api = new HotelApi('fun');
        return api.getResourcesOfParent(categoryId, includeData, 'category').then(funCategories => {
            dispatch(getFunCategoriesSuccess(funCategories));
            return funCategories;  // return Promise to allow accessing category via chaining
        }, error => {
            dispatch(getFunCategoriesFailed(error));
        });
    }

}

export function getFunResourcesOfParent(categoryId, includeData) {
    return function (dispatch, getState) {
        dispatch(fetchingFunResources());
        let api = new HotelApi('fun');
        return api.getResourcesOfParent(categoryId, includeData, 'resource').then(funResources => {
            dispatch(getFunResourcesSuccess(funResources));
            return funResources;  // return Promise to allow accessing category via chaining
        }, error => {
            dispatch(getFunResourcesFailed(error));
        });
    }

}

export function getFunCategoryBySlug(categorySlug, includeData) {
    return function (dispatch, getState) {
        let funCategoriesInStore = getState().funCategories;

        let funCategoryFromStore = reduxStore.getResourceFromStoreBySlug(categorySlug, funCategoriesInStore.data);

        if (funCategoryFromStore) {
            console.log('found in store. dispatching GET_CURRENT_FUN_CATEGORY_SUCCESS');
            dispatch(getCurrentFunCategorySuccess(funCategoryFromStore));
        }

        dispatch(fetchingFunCategory());

        let api = new HotelApi('fun');
        return api.getResourceBySlug(categorySlug, includeData, 'resource').then(funCategory => {
            dispatch(getCurrentFunCategorySuccess(funCategory));
            return funCategory;
        }, error => {
            console.log('dispatching GET_CURRENT_FUN_CATEGORY_FAILED');
            dispatch(getCurrentFunCategoryFailed(error));
        });

    }
}

export function getFunResourceBySlug(resourceSlug, includeData) {
    return function (dispatch, getState) {
        let funResourcesInStore = getState().funResources;

        let funItemFromStore = reduxStore.getResourceFromStoreBySlug(resourceSlug, funResourcesInStore.data);

        if (funItemFromStore) {
            console.log('found in store. dispatching GET_CURRENT_FUN_RESOURCE_SUCCESS');
            dispatch(getCurrentFunResourceSuccess(funItemFromStore));
        }

        dispatch(fetchingFunResource());

        let api = new HotelApi('fun');
        return api.getResourceBySlug(resourceSlug, includeData, 'resource').then(funItem => {

            dispatch(getCurrentFunResourceSuccess(funItem));
            return funItem;
        }, error => {

            dispatch(getCurrentFunResourceFailed(error));
        });

    }
}

export function setCurrentFunCategory(category) {
    return function (dispatch) {
        dispatch(setCurrentFunCategorySuccess(category));
        dispatch(initializeFunCategory());
        return Promise.resolve(category); // return Promise to allow accessing category via chaining
    }
}

export function setCurrentFunResource(resource, includeData) {
    return function (dispatch) {
        dispatch(setCurrentFunResourceSuccess(resource));
        dispatch(initializeFunResource());
        return Promise.resolve(resource); // return Promise to allow accessing category via chaining
    }
}


