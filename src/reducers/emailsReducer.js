import { SPAM, TRASH} from '../utils/constants';
import {
    LOAD_EMAILS,
    ACTIVE_EMAIL,
    MARK_AS_UNREAD,
    MARK_AS_SPAM,
    SEND_TO_TRASH,
    SHOW_LIST
} from '../actions/actionTypes';
import initialState from './initialState';

export default function emailsReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_EMAILS: {
            return Object.assign({}, state, {
                items: action.payload
            });
        }

        case ACTIVE_EMAIL: {
            const newState = Object.assign({}, state);
            const email = action.payload;

            newState.items.map(item => item.active = false);
            newState.items
                .filter(item => item.id == email.id)
                .map(item => {
                    item.active = true;
                    item.isReaded = true;
                });

            return Object.assign({}, newState, {
                currentItem: newState.items.filter(item => item.id == email.id)[0]
            });
        }

        case MARK_AS_UNREAD: {
            const newState = Object.assign({}, state);
            newState.items.filter(item => item.active).map(item => {
                item.isReaded = false;
                item.active = false;
            });

            return Object.assign({}, newState, {
                currentItem: {}
            });
        }

        case MARK_AS_SPAM: {
            const newState = Object.assign({}, state);
            newState.items.filter(item => item.active).map(item => {
                item.type = SPAM;
                item.active = false;
            });

            return Object.assign({}, newState, {
                currentItem: {}
            });
        }

        case SEND_TO_TRASH: {
            const newState = Object.assign({}, state);
            newState.items.filter(item => item.active).map(item => {
                item.type = TRASH;
                item.active = false;
            });

            return Object.assign({}, newState, {
                currentItem: {}
            });
        }

        case SHOW_LIST: {
            const { list } = action.payload;
            return Object.assign({}, state, {
                list
            });
        }

        default:
            return state;
    }
}
