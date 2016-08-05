import * as types from './actionTypes.js'
import {HotelApi} from '../api/mockHotelApi'

function searchingForResources() {
    return {
        type: types.SEARCHING_FOR_RESOURCES
    }
}

function searchingForResourcesFinished() {
    return {
        type: types.SEARCHING_FOR_RESOURCES_FINISHED
    }
}


export function searchForResources(searchQuery) {
    return function (dispatch, getState) {
        console.log('dispatching SEARCHING_FOR_RESOURCES');
        dispatch(searchingForResources());
        let api = new HotelApi();
        return api.searchResourcesByTitle(searchQuery).then(searchResults => {
            console.log('returning searchResults', searchResults);
            dispatch(searchingForResourcesFinished());
            return searchResults;
        }, searchResults => {
            console.log(`Search failed: ${searchResults}`);
            dispatch(searchingForResourcesFinished());
            return Promise.reject(searchResults);
        });
    }

}

