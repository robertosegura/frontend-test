import React from 'react';
import ActionsList from './ActionList';
import EmailList from './EmailList';

const Sidebar = ({list, showList, emails, onClick}) => {

    return (
        <div className='sidebar'>
            <ActionsList list={list} showList={showList} />
            <EmailList list={list} emails={emails} onClick={onClick} />
        </div>
    );
};

export default Sidebar;