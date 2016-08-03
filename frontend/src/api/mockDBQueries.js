export function getResourceById(id, resources) {
    return resources.find(resource => resource.id === id);
}

export function getResourceBySlug(slug, resources) {
    return resources.find(resource => resource.slug === slug);
}

export function getResourceByType(resources, resourceType) {
    return resources.find(resource => resource.type === resourceType);
}


export function getResourcesByType(resources, resourceType) {
    return resources.filter(resource => resource.type === resourceType);
}

export function getResourcesOfParent(parentId, resources, resourceType) {

    if (resourceType) {
        return resources.filter(resource => resource.parentId === parentId && resource.type === resourceType);
    }
    return resources.filter(resource => resource.parentId === parentId);
}

export function getRootResources(resources) {
    return resources.filter(resource => resource.isRoot);
}






