import * as model from './model'
import * as mockDBQueries from './mockDBQueries'

export class HotelApi {

    constructor(table) {
        this.table = table;
    }

    getMainResource() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(model[this.table]);
            }, 2000);

        });
    }

    getResourcesOfParent(parentId, resourceType) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let foundResources = mockDBQueries.getResourcesOfParent(parentId, model[this.table].data, resourceType);
                foundResources ? resolve({data: foundResources}) : reject('No amenities found');
            }, 2000);

        });
    }

    getRootResources(parentId, resourceType) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let foundResources = mockDBQueries.getRootResources(model[this.table].data);
                foundResources ? resolve({data: foundResources}) : reject('No amenities found');
            }, 2000);

        });
    }

    getCurrentResource(resourceSlug, parentSlug) {
        return new Promise((resolve, reject) => {
            let resource = mockDBQueries.getResourceBySlug(resourceSlug, model[this.table].data);
            setTimeout(() => {
                return resource ? resolve(resource) : reject(` ${resourceSlug} doesn't exist`);
            }, 2000);

        });
    }

    getAllCategories() {
        return new Promise((resolve, reject) => {
            let foundCategories = mockDBQueries.getResourcesByType(model[this.table].data, 'category');
            setTimeout(() => {
                return foundCategories.length > 0 ? resolve({data: foundCategories}) : reject('No categories found');
            }, 2000);

        });
    }

    getCategoryById(categoryId) {
        return new Promise((resolve, reject) => {
            let foundCategory = mockDBQueries.getResourceById(categoryId, model[this.table].data);
            setTimeout(() => {
                return foundCategory ? resolve(foundCategory) : reject('No category found');
            }, 2000);
        })
    }

}


