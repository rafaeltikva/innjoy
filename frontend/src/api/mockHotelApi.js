import amenities from './model/amenities'
import hotelInfo from './model/hotelInfo'
import userInfo from './model/userInfo'
import chats from './model/chats'
import notifications from './model/notifications'
import {getResource, getResourceBySlug, getResourcesOfParent, getRootResources, getAllCategories, getCategoriesOfParent} from './helpers'

export class HotelApi {
    getAllAmenities() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({data: amenities.data});
            }, 2000);

        });
    }

    getAmenitiesOfParent(parentId, amenityType) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let foundAmenities = getResourcesOfParent(parentId, amenities.data, amenityType);
                foundAmenities ? resolve({data: foundAmenities}) : reject('No amenities found');
            }, 2000);

        });
    }

    getRootAmenities(parentId, amenityType) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let foundAmenities = getRootResources(amenities.data);
                foundAmenities ? resolve({data: foundAmenities}): reject('No amenities found');
            }, 2000);

        });
    }

    getCurrentAmenity(resourceSlug, parentSlug) {
        return new Promise((resolve, reject) => {
            let amenity = getResourceBySlug(resourceSlug, amenities.data);
            setTimeout(() => {
                return amenity ? resolve(amenity) : reject(` ${resourceSlug} doesn't exist`);
            }, 2000);

        });
    }

    getAllCategories() {
        return new Promise((resolve, reject) => {
            let foundCategories = getAllCategories(amenities.data);
            setTimeout(() => {
                return foundCategories.length > 0 ? resolve({data: foundCategories}) : reject('No categories found');
            }, 2000);

        });
    }

    getCategoryById(categoryId) {
        return new Promise((resolve, reject) => {
            let foundCategory = getResource(categoryId);
            setTimeout(() => {
                return foundCategory ? resolve(foundCategory) : reject('No category found');
            }, 2000);
        })
    }

    getAmenityCategories(amenityId) {
        return new Promise((resolve, reject) => {
            let foundCategories = getCategoriesOfParent(amenityId, amenities.data);
            setTimeout(() => {
                return foundCategories.length > 0 ? resolve({ data: foundCategories}) : reject('No categories found');
            }, 2000);

        });
    }

    getHotelInfo() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign({}, hotelInfo));
            }, 2000);
        });
    }

    getNotifications() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign({}, notifications));
            }, 2000)
        });
    }


}

export class UserApi {

    getUserInfo() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign({}, userInfo));
            }, 2000)
        });
    }

    getChats() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign({}, chats));
            }, 2000)
        });
    }


}
