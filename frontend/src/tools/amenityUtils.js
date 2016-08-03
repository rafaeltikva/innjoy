export function getAmenityFromStore(slug, amenitiesList) {
    return amenitiesList.find(amenity => amenity.slug === slug); // get current amenity object
}

export function getResourcesOfParent(parentId, resources, resourceType) {
    if (resourceType) {
        return resources.filter(amenity => amenity.parentId === parentId && amenity.type === resourceType);
    }
    return resources.filter(amenity => amenity.parentId === parentId);
}
