import React, { Component } from 'react';
import ActionsList from './ActionList';
import EmailList from './EmailList';

class Sidebar extends Component {

    render() {
        return (
            <div className='sidebar'>
                <ActionsList list={this.props.list} showList={this.props.showList} />
                <EmailList list={this.props.list} emails={this.props.emails} onClick={this.props.onClick} />
            </div>
        );
    }
};

export default Sidebar;