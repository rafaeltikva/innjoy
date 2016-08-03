import initialState from '../../store/initialState'
import * as types from '../../actions/actionTypes'

export default function giftShopCategoriesReducer (state = initialState.amenityCategories, action) {
    console.log('running amenityCategoriesReducer');
    switch (action.type) {
        case types.FETCHING_GIFT_SHOP_CATEGORIES:
            return Object.assign({}, state, { isFetching: true} );
        case types.GET_GIFT_SHOP_CATEGORIES_SUCCESS:
            return action.categories;
        case types.GET_GIFT_SHOP_CATEGORIES_FAILED:
            return { error: action.error} ;
        default:
            return state;
    }
}