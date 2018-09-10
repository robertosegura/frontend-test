import React from 'react';

const Content = ({email}) => {

    return (
        <div className="section-content">
            <div className="content">
                <div className="section-sender">
                    <div className="sender">
                        {email.tag} <span className="from">{"<"}{email.from}{">"}</span>
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
    const dateOpt = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    const timeOpt = {hour: '2-digit', minute:'2-digit'};
    const dateFormat = new Date(date);
    return dateFormat.toLocaleDateString('en-US', dateOpt) + ' ' + dateFormat.toLocaleTimeString([], timeOpt);
};

export default Content;