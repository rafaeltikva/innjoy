export function isResourceType(slug, resources) {
    return resources.find(resource => resource.slug === slug && resource.type === 'resource') ? true : false;
}

export function isRoot(slug, resources) {
    return resources.find(resource => resource.slug === slug && resource.isRoot ) ? true : false;
}

export function promiseReject(error) {
    console.error("A promise failed to resolve: ", error);
}