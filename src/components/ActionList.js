import React, { Component } from 'react';

class ActionList extends Component {

    render() {
        return (
            <div className='list-actions'>
                <div onClick={() => this.props.showList('INBOX')} className={'action' + (this.props.list == 'INBOX' ? ' active ' : '')}>
                    <i className="icon">inbox</i>
                    <label className='text'>Inbox</label>
                </div>
                <div onClick={() => this.props.showList('TRASH')} className={'action' + (this.props.list == 'TRASH' ? ' active ' : '')}>
                    <i className="icon">delete_outline</i>
                    <label className='text'>Trash</label>
                </div>
                <div onClick={() => this.props.showList('SPAM')} className={'action' + (this.props.list == 'SPAM' ? ' active ' : '')}>
                    <i className="icon">bug_report</i>
                    <label className='text'>Spam</label>
                </div>
            </div>
        );
    }
};

export default ActionList;