/*
- fetch chat messages
- fetch chat messages status
- send a chat message
- mark message as read
 */

import * as types from './actionTypes.js'
import {UserApi} from '../api/mockHotelApi'

function fetchingChats() {
    return {
        type: types.FETCHING_CHATS,
        isFetching: true
    }
}

function getChatsSuccess(chats) {
    return {
        type: types.GET_CHATS_SUCCESS,
        chats,
        isFetching: false
    }
}


function getChatsError(error) {
    return {
        type: types.GET_CHATS_ERROR,
        error,
        isFetching: false
    }
}

function addChatBubble(chat) {
    return {
        type: types.ADD_CHAT_BUBBLE,
        chat
    }
}

function removeChatBubble(chat) {

}



export function getChats() {
    return function(dispatch) {
        console.log("dispatching FETCHING_CHATS");
        dispatch(fetchingChats());
        let api = new UserApi();
        api.getChats().then((chats) => {
            console.log("dispatching GET_CHATS_SUCCESS with: ", chats);
            dispatch(getChatsSuccess(chats));
        });
    }
}