import React from 'react';

const MainArea = ({email, markAsUnread, markAsSpam, sendToTrash}) => {

    if (Object.keys(email).length == 0) {
        return (
            <div className='main-area empty'>
                <i className="icon">mail_outline</i>
            </div>
        )
    }

    return (
        <div className="main-area">
            <div className="section-info">
                <div className="subject">
                    {email.subject}
                </div>
                <div className="actions">
                    <i className="icon" onClick={() => markAsUnread()}>fiber_manual_record</i>
                    {email.type != 'TRASH' ? <i className="icon" onClick={() => sendToTrash()}>delete_outline</i> : false}
                    {email.type != 'SPAM' ? <i className="icon" onClick={() => markAsSpam()}>bug_report</i> : false}
                </div>
            </div>
            <div className="section-content">
                <div className="content">
                    <div className="section-sender">
                        <div className="sender">
                            {email.tag} <a href="">{email.from}</a>
                        </div>
                        <div className="date">
                            {formatDate(email.date)}
                        </div>
                    </div>
                    <div className="body">
                        {email.body}
                    </div>
                </div>
            </div>
        </div>
    );
};

const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateFormat = new Date(date);
    return dateFormat.toLocaleDateString('en-US', options) + ' ' + dateFormat.toLocaleTimeString();
};

export default MainArea;