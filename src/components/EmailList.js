import React from 'react';

const EmailList = ({emails, list, onClick}) => {

    return (
        <ul className='email-list'>
            {emails.filter(email => email.type == list).map((email) =>
                renderItem(email, onClick)
            )}
        </ul>
    );
};

const renderItem = (email, onClick) => {
    return (
        <li key={email.id} onClick={() => onClick(email)}  className={'email-item' + (!email.isReaded ? ' unreaded ' : '') + (email.active ? ' active ' : '')}>
            <div key className='sender'>
                <i className="icon">person_outline</i>
                <label className='text'>{email.tag}</label>
                <label className="date">{formatDate(email.date)}</label>
            </div>
            <div className="subject">
                {!email.isReaded ? <i className="icon">fiber_manual_record</i> : false}
                <label>{email.subject}</label>
            </div>
            <div className="excerpt">
                <label>{email.body}</label>
            </div>
        </li>
    )
};

const formatDate = (date) => {
    const options = { month: 'short', day: 'numeric' };
    const dateFormat = new Date(date);
    return dateFormat.toLocaleDateString('en-US', options)
}

export default EmailList;