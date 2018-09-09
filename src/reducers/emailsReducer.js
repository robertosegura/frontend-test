import { LOAD_EMAILS } from '../actions/actionTypes';
import initialState from './initialState';

export default function emailsReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_EMAILS:

            return {
                items: action.payload
            }

        default:
            return state;
    }
}
