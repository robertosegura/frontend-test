import { combineReducers } from 'redux';
import emails from './emailsReducer';

const rootReducer = combineReducers({
    emails
});

export default rootReducer;