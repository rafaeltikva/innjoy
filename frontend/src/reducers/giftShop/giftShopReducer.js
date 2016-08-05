import initialState from '../../store/initialState'
import * as types from '../../actions/actionTypes'
import _ from 'lodash'

export default function giftShopReducer(state = initialState.giftShop, action) {
    switch (action.type) {
        case types.FETCHING_GIFT_SHOP:
            return Object.assign({}, state, { isFetching: true} );
        case types.INITIALIZE_GIFT_SHOP:
            return Object.assign({}, state, { isInit: true} );
        default:
            return state;
    }
}