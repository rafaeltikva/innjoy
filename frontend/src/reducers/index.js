import {combineReducers} from 'redux'
import * as amenities from './amenities'
import * as giftShop from './giftShop'
import * as userInfo from './userInfo'
import * as hotelInfo from './hotelInfo'
import * as notifications from './notifications'
import * as chats from './chats'
import * as search from './search'

const rootReducer = combineReducers({
    hotelInfo: hotelInfo.hotelInfoReducer,
    userInfo: userInfo.userInfoReducer,
    amenities: amenities.amenitiesReducer,
    currentAmenity: amenities.amenityReducer,
    amenityCategories: amenities.amenityCategoriesReducer,
    currentAmenityCategory: amenities.amenityCategoryReducer,
    giftShopCategories: giftShop.giftShopCategoriesReducer,
    giftShopResources: giftShop.giftShopResourcesReducer,
    currentGiftShopResource: giftShop.giftShopResourceReducer,
    currentGiftShopCategory: giftShop.giftShopCategoryReducer,
    notifications: notifications.notificationsReducer,
    chat: chats.chatsReducer,
    chats: chats.chatsReducer,
    search: search.searchReducer
});

export default rootReducer;