export function getResourceBySlug(slug, resources) {
    return resources.find(resource => resource.slug === slug);
}