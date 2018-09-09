import React, { Component } from 'react';
import ActionsList from './ActionList';
import EmailList from './EmailList';

class Sidebar extends Component {

    render() {
        return (
            <div className='sidebar'>
                <ActionsList />
                <EmailList emails={this.props.emails} onClick={this.props.onClick} />
            </div>
        );
    }
};

export default Sidebar;