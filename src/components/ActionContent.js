import React from 'react';
import { TRASH, SPAM } from '../utils/constants';

const ActionContent = ({email, markAsUnread, markAsSpam, sendToTrash}) => {

    return (
        <div className="section-info">
            <div className="subject">
                {email.subject}
            </div>
            <div className="actions">
                <i className="icon" onClick={() => markAsUnread()}>fiber_manual_record</i>
                {email.type != TRASH ? <i className="icon" onClick={() => sendToTrash()}>delete_outline</i> : false}
                {email.type != SPAM ? <i className="icon" onClick={() => markAsSpam()}>bug_report</i> : false}
            </div>
        </div>
    );
};

export default ActionContent;