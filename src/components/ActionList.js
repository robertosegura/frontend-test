import React, { Component } from 'react';

class ActionList extends Component {

    render() {
        return (
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
        );
    }
};

export default ActionList;