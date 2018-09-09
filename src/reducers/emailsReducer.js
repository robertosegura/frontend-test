import { LOAD_EMAILS, ACTIVE_EMAIL } from '../actions/actionTypes';
import initialState from './initialState';

export default function emailsReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_EMAILS:
            return {
                items: action.payload,
                currentItem: state.currentItem
            }
        case ACTIVE_EMAIL:
            return {
                items: state.items,
                currentItem: action.payload
            }
        default:
            return state;
    }
}
