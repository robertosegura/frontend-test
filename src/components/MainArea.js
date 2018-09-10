import React from 'react';
import ActionContent from './ActionContent';
import Content from './Content';

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
            <ActionContent email={email} markAsSpam={markAsSpam} markAsUnread={markAsUnread} sendToTrash={sendToTrash} />
            <Content email={email} />
        </div>
    );
};

export default MainArea;