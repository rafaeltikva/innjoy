export function getAmenityFromStore(slug, amenitiesList) {
    return amenitiesList.find(amenity => amenity.slug === slug); // get current amenity object
}

export function getAmenitiesOfParent(parentId, amenities, amenityType) {
    if (amenityType) {
        return amenities.filter(amenity => amenity.parentId === parentId && amenity.type === amenityType);
    }
    return amenities.filter(amenity => amenity.parentId === parentId);
}
