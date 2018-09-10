import React from 'react';
import { INBOX, TRASH, SPAM } from '../utils/constants';

const ActionList = ({showList, list}) => {

    return (
        <div className='list-actions'>
            <div onClick={() => showList(INBOX)} className={'action' + (list == INBOX ? ' active ' : '')}>
                <i className="icon">inbox</i>
                <label className='text'>Inbox</label>
            </div>
            <div onClick={() => showList(TRASH)} className={'action' + (list == TRASH ? ' active ' : '')}>
                <i className="icon">delete_outline</i>
                <label className='text'>Trash</label>
            </div>
            <div onClick={() => showList(SPAM)} className={'action' + (list == SPAM ? ' active ' : '')}>
                <i className="icon">bug_report</i>
                <label className='text'>Spam</label>
            </div>
        </div>
    );
};

export default ActionList;