export function getResourceById(id, resources) {
    return resources.find(resource => resource.id === id);
}

export function getResourceBySlug(slug, resources) {
    return resources.find(resource => resource.slug === slug);
}

export function getResourcesByType(resourceType, resources) {
    return resources.filter(resource => resource.type === resourceType);
}

export function getResourcesByTitle(resourceTitle, resources, resourceType) {
    if (resourceType) {
        return resources.filter(resource => resource.title.toLowerCase().match(resourceTitle.toLowerCase()) && resource.type === resourceType);
    }
    return resources.filter(resource => resource.title.toLowerCase().match(resourceTitle.toLowerCase().match(resourceTitle.toLowerCase())));
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






