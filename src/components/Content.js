import React from 'react';

const Content = ({email}) => {

    return (
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
    );
};

const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateFormat = new Date(date);
    return dateFormat.toLocaleDateString('en-US', options) + ' ' + dateFormat.toLocaleTimeString();
};

export default Content;