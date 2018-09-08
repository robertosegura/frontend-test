import { LOAD_EMAILS } from './actionTypes';
import data from '../data/mail-data.json'

export const loadEmails = () => ({
    type: LOAD_EMAILS,
    payload: data
});