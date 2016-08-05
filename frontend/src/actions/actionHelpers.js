export function getResourceFromStoreBySlug(slug, store) {
    return store.find(resource => resource.slug === slug);
}

export function getResourcesOfParent(parentId, resources, resourceType) {

    if (resourceType) {
        return {data: resources.filter(resource => resource.parentId === parentId && resource.type === resourceType) };
    }
    return { data: resources.filter(resource => resource.parentId === parentId) };
}