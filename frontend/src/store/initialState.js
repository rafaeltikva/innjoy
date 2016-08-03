export default {
    hotelInfo: {
        isFetching: false,
        isInit: false,
        error: '',
        data: {}
    },
    userInfo: {
        isFetching: false,
        isInit: false,
        error: '',
        data: {}
    },
    amenities: {
        isFetching: false,
        error: '',
        data: []
    },
    currentAmenity: {
        isFetching: false,
        isInit: false,
        error: '',
        likedUsers: []
    },
    amenityCategories: {
        isFetching: false,
        error: '',
        data: []
    },
    currentAmenityCategory: {
        isFetching: false,
        isInit: false,
        error: '',
        data: []
    },
    giftShopCategories: {
        isFetching: false,
        error: '',
        data: []
    },
    currentGiftShopCategory: {
        isFetching: false,
        error: '',
        data: []
    },
    currentGiftShopCategoryResources: {
        isFetching: false,
        error: '',
        data: []
    },
    currentGiftShopResource: {
        isFetching: false,
        error: '',
        data: {}
    },
    chats: {
        isFetching: false,
        error: '',
        data: []
    },
    notifications: {
        isFetching: false,
        error: '',
        data: []
    },
    chat: {
        isFetching: false,
        error: '',
        user: {},
        options: {
            showBubble: true
        },
        messages: []
    }
};