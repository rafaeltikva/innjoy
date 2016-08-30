import * as model from './model'
import * as mockDBQueries from './mockDBQueries'

/*** mock API config ***/
var mockDelay = 1000;

export class HotelApi {

    constructor(table) {
        this.table = table;
    }

    getMainResource() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(model[this.table]);
            }, mockDelay);

        });
    }

    getResourcesOfParent(parentId, includeData, resourceType) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let foundResources = mockDBQueries.getResourcesOfParent(parentId, model[this.table].data, resourceType);
                if (includeData) {
                    foundResources = foundResources.map(resource => {
                        resource.data = mockDBQueries.getResourcesOfParent(resource.id, model[this.table].data);
                        return resource;
                    });
                }
                console.log('the found resources from mock DB: ', foundResources);
                foundResources.length ? resolve({data: foundResources}) : reject('No amenities found');
            }, mockDelay);

        });
    }

    getRootResources(includeData) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let foundResources = mockDBQueries.getRootResources(model[this.table].data);
                if (includeData) {
                    foundResources = foundResources.map(resource => {
                        resource.data = mockDBQueries.getResourcesOfParent(resource.id, model[this.table].data)
                        return resource;
                    });
                }
                foundResources ? resolve({data: foundResources}) : reject('No amenities found');
            }, mockDelay);

        });
    }

    getResourceBySlug(resourceSlug, includeData, resourceType) {
        return new Promise((resolve, reject) => {
            let resource = mockDBQueries.getResourceBySlug(resourceSlug, model[this.table].data, resourceType);
            if (includeData) {
                resource.data = mockDBQueries.getResourcesOfParent(resource.id, model[this.table].data)
            }
            setTimeout(() => {
                return resource ? resolve(resource) : reject(` ${resourceSlug} doesn't exist`);
            }, mockDelay);

        });
    }

    getResourceById(resourceId) {
        return new Promise((resolve, reject) => {
            let foundResource = mockDBQueries.getResourceById(resourceId, model[this.table].data);
            setTimeout(() => {
                return foundResource ? resolve(foundResource) : reject('No resource found in server');
            }, mockDelay);
        });
    }

    getResourcesByType(resourceType, includeData) {
        return new Promise((resolve, reject) => {
            let foundResources = mockDBQueries.getResourcesByType(resourceType, model[this.table].data);
            if (includeData) {
                foundResources = foundResources.map(resource => {
                    resource.data = mockDBQueries.getResourcesOfParent(resource.id, model[this.table].data);
                    return resource;
                })
            }
            setTimeout(() => {
                return foundResources.length ? resolve({data: foundResources}) : reject(`No resources of type ${resourceType}`);
            }, mockDelay);

        });
    }

    searchResourcesByTitle(searchQuery) {
        return new Promise((resolve, reject) => {
            let foundResources = [];
            try {
                for (let table in model) {
                    if (table === 'amenities' || table === 'giftShop' || table === 'restaurants' ) {
                        foundResources.push(...mockDBQueries.getResourcesByTitle(searchQuery, model[table].data, 'resource'));
                    }
                }
            }
            catch(error) {
                console.error(error.message);
                return reject({textResponse: 'Search failed.', error: `Error: ${error.message}`} );
            }

            setTimeout(() => {
                console.log('resolving foundResources', foundResources);
                return resolve({
                    data: foundResources,
                    numOfResults: foundResources.length,
                    textResponse: `${foundResources.length} results found.`
                });
            }, mockDelay);
        });
    }

}


