import initialState from '../../store/initialState'
import * as types from '../../actions/actionTypes'
import _ from 'lodash'

export default function giftShopCategoriesReducer (state = initialState.giftShopCategories, action) {
    switch (action.type) {
        case types.FETCHING_GIFT_SHOP_CATEGORIES:
            return Object.assign({}, state, { isFetching: true} );
        case types.GET_GIFT_SHOP_CATEGORIES_SUCCESS:
            return { data: _.union(state.data, action.categories.data)};
        case types.GET_GIFT_SHOP_CATEGORIES_FAILED:
            return { error: action.error} ;
        default:
            return state;
    }
}