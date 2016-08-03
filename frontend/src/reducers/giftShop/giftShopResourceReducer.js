import initialState from '../../store/initialState'
import * as types from '../../actions/actionTypes'
import _ from 'lodash'

export default function giftShopResourceReducer(state = initialState.currentGiftShopResource, action) {
    console.log('running giftShopReducer');
    switch (action.type) {
        case types.FETCHING_GIFT_SHOP_RESOURCE:
            return Object.assign({}, state, { isFetching: true} );
        case types.INITIALIZE_GIFT_SHOP_RESOURCE:
            return Object.assign({}, state, { isInit: true} );
        default:
            return state;
    }
}