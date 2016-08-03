import initialState from '../../store/initialState'
import * as types from '../../actions/actionTypes'
import _ from 'lodash'

export default function giftShopCategoryResourcesReducer(state = initialState.currentGiftShopCategoryResources, action) {
    console.log('running giftShopReducer');
    switch (action.type) {
        case types.FETCHING_GIFT_SHOP_CATEGORY_RESOURCES:
            return Object.assign({}, state, { isFetching: true} );
        case types.GET_CURRENT_GIFT_SHOP_CATEGORY_RESOURCES_SUCCESS:
            //return Object.assign({}, { data: _.union(...state.data, ...action.resources.data) });
            return action.resources;
        case types.GET_CURRENT_GIFT_SHOP_CATEGORY_RESOURCES_FAILED:
            return action.error;
        default:
            return state;
    }
}