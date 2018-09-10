import React, { Component } from 'react';

class EmailList extends Component {

    render() {
        const { emails } = this.props;

        return (
            <ul className='email-list'>
                {emails.filter(email => email.type == this.props.list).map((email, index) =>
                    this.item(email, index)
                )}
            </ul>
        );
    }

    item(email, index) {
        return (
            <li key={index} onClick={() => this.props.onClick(email)}  className={'email-item' + (!email.isReaded ? ' unreaded ' : '') + (email.active ? ' active ' : '')}>
                <div key className='sender'>
                    <i className="icon">person_outline</i>
                    <label className='text'>{email.tag}</label>
                </div>
                <div className='subject'>
                    {!email.isReaded ? <i className='icon'>fiber_manual_record</i> : false}
                    <label>{email.subject}</label>
                </div>
                <div className='excerpt'>
                    {email.body}
                </div>
            </li>
        )
    }
};

export default EmailList;