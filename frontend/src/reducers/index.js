import {combineReducers} from 'redux'
import * as amenities from './amenities'
import * as giftShop from './giftShop'
import * as userInfo from './userInfo'
import * as hotelInfo from './hotelInfo'
import * as notifications from './notifications'
import * as chats from './chats'

const rootReducer = combineReducers({
    hotelInfo: hotelInfo.hotelInfoReducer,
    userInfo: userInfo.userInfoReducer,
    amenities: amenities.amenitiesReducer,
    amenityCategories: amenities.amenityCategoriesReducer,
    currentAmenity: amenities.amenityReducer,
    giftShopCategories: giftShop.giftShopCategoriesReducer,
    currentAmenityCategory: amenities.amenityCategoryReducer,
    currentGiftShopCategoryResources: giftShop.giftShopCategoryResourcesReducer,
    currentGiftShopResource: giftShop.giftShopResourceReducer,
    currentGiftShopCategory: giftShop.giftShopCategoryReducer,
    notifications: notifications.notificationsReducer,
    chat: chats.chatsReducer,
    chats: chats.chatsReducer

});

export default rootReducer;