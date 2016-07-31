import amenitiesReducer from './amenitiesReducer'
import amenityReducer from './amenityReducer'
import categoriesReducer from './categoriesReducer'
import categoryReducer from './categoryReducer'
import userInfoReducer from './userInfoReducer'
import hotelInfoReducer from './hotelInfoReducer'
import notificationsReducer from './notificationsReducer'
import chatsReducer from './chatsReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    hotelInfo: hotelInfoReducer,
    userInfo: userInfoReducer,
    amenities: amenitiesReducer,
    currentAmenity: amenityReducer,
    amenityCategories: categoriesReducer,
    currentAmenityCategory: categoryReducer,
    notifications: notificationsReducer,
    chat: chatsReducer,
    chats: chatsReducer

});

export default rootReducer;