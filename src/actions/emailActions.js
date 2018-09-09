import { LOAD_EMAILS, ACTIVE_EMAIL } from './actionTypes';
import data from '../data/mail-data.json'

export const loadEmails = () => ({
    type: LOAD_EMAILS,
    payload: data
});

export const activeEmail = (email) => ({
    type: ACTIVE_EMAIL,
    payload: email
});