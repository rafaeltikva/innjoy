export const greetUser = (name) => {
  let timeInHours = new Date().getHours();
    if (timeInHours > 3 && timeInHours < 12 ) {
        return "Good Morning, " + name;
    }
    if (timeInHours >= 12 && timeInHours <= 18 ) {
        return "Good Afternoon, " + name;
    }
    return "Good Evening, " + name;
};

export function getResourceById(id, resources) {
    return resources.find(resource => resource.id === id);
}

export function getResourceBySlug(slug, resources) {
    return resources.find(resource => resource.slug === slug);
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

export function getAllCategories(resources) {
    return resources.filter(resource => resource.type === 'category');
}

export function getCategoriesOfParent(parentId, resources) {
    return resources.filter(resource => resource.parentId === parentId && resource.type === 'category');
}



