import {
    LOAD_EMAILS,
    ACTIVE_EMAIL,
    MARK_AS_UNREAD,
    MARK_AS_SPAM,
    SEND_TO_TRASH,
    SHOW_LIST
} from './actionTypes';
import data from '../data/mail-data.json'

export const loadEmails = () => {
    // Initially all are in INBOX
    const processed = data.map((item, index) => {
        return Object.assign({ id: ++index, type: 'INBOX'}, item)
    });

    return {
        type: LOAD_EMAILS,
        payload: processed
    }
};

export const activeEmail = (email) => ({
    type: ACTIVE_EMAIL,
    payload: email
});

export const markAsUnread = () => ({
    type: MARK_AS_UNREAD
});

export const markAsSpam = () => ({
    type: MARK_AS_SPAM
});

export const sendToTrash = () => ({
    type: SEND_TO_TRASH
});

export const showList = (type) => ({
    type: SHOW_LIST,
    payload: { list: type }
});