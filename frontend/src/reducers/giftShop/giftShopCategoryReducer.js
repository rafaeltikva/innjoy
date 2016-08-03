import initialState from '../../store/initialState'
import * as types from '../../actions/actionTypes'

export default function giftShopCategoryReducer (state = initialState.currentAmenityCategory, action) {
    console.log('running amenityCategoryReducer');
    switch (action.type) {
        case types.FETCHING_GIFT_SHOP_CATEGORY:
            return Object.assign({}, state, { isFetching: true} );
        case types.SET_CURRENT_GIFT_SHOP_CATEGORY_SUCCESS:
            return action.category;
        case types.INITIALIZE_GIFT_SHOP_CATEGORY:
            return Object.assign({}, state, { isInit: true} );
        default:
            return state;
    }
}