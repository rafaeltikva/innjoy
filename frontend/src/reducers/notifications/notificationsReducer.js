import initialState from '../../store/initialState'
import * as types from '../../actions/actionTypes'

export default function notificationsReducer(state = initialState.notifications, action) {
    switch (action.type) {
        case types.FETCHING_NOTIFICATIONS:
            return Object.assign({}, state, {isFetching: true});
        case types.GET_NOTIFICATIONS_SUCCESS:
            return action.notifications;
        default:
            return state;
    }
}