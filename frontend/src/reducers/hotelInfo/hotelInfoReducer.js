import * as types from '../../actions/actionTypes'
import initialState from '../../store/initialState'

export default function hotelInfoReducer(state = initialState.hotelInfo, action) {
    console.log('running hotelInfoReducer with:', action.hotelInfo);
    switch (action.type) {
        case types.FETCHING_HOTEL_INFO:
            return Object.assign({}, state, {isFetching: true });
        case types.GET_HOTEL_INFO_SUCCESS:
            return action.hotelInfo;
        default:
            return state;
    }
}