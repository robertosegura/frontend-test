import React from 'react';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='list-actions'>
                <div className='action'>
                    <i className="icon">inbox</i>
                    <label className='text'>Inbox</label>
                </div>
                <div className='action'>
                    <i className="icon">delete_outline</i>
                    <label className='text'>Trash</label>
                </div>
                <div className='action'>
                    <i className="icon">bug_report</i>
                    <label className='text'>Spam</label>
                </div>
            </div>
            <ul className='email-list'>
                <li className='email-item unread'>
                    <div className='sender'>
                        <i className="icon">person_outline</i>
                        <label className='text'>Agave Lab</label>
                    </div>
                    <div className='subject'>
                        Front End Challenge
                    </div>
                    <div className='excerpt'>
                        Lorem ipsum dolor sit amet consectetur adp...
                    </div>
                </li>
                <li className='email-item active'>
                    <div className='sender'>
                        <i className="icon">person_outline</i>
                        <label className='text'>Amazon.com</label>
                    </div>
                    <div className='subject'>
                        Amazon SES Address Verification Request
                    </div>
                    <div className='excerpt'>
                        Lorem ipsum dolor sit amet consectetur adp...
                    </div>
                </li>
                <li className='email-item'>
                    <div className='sender'>
                        <i className="icon">person_outline</i>
                        <label className='text'>Amazon.com</label>
                    </div>
                    <div className='subject'>
                        RE: Application
                    </div>
                    <div className='excerpt'>
                        Lorem ipsum dolor sit amet consectetur adp...
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;