import initialState from '../../store/initialState'
import * as types from '../../actions/actionTypes'
import _ from 'lodash'

export default function giftShopResourcesReducer(state = initialState.giftShopResources, action) {
    switch (action.type) {
        case types.FETCHING_GIFT_SHOP_RESOURCES:
            return Object.assign({}, state, {isFetching: true});
        case types.GET_GIFT_SHOP_RESOURCES_SUCCESS:
            return {data: _.union(state.data, action.resources.data)};
        case types.GET_GIFT_SHOP_RESOURCES_FAILED:
            return action.error;
        default:
            return state;
    }
}