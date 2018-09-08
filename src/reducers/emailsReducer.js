import { LOAD_EMAILS } from '../actions/actionTypes';
import initialState from './initialState';

export default function emailsReducer(state = initialState.emails, action) {
    switch (action.type) {
        case LOAD_EMAILS:
            return action.payload;
        default:
            return state;
    }
}
