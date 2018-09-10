import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadEmails, activeEmail, markAsUnread, markAsSpam, sendToTrash, showList } from '../../actions/emailActions';
import Sidebar from '../Sidebar';
import MainArea from '../MainArea';

class EmailClientContainer extends Component {

    constructor(props) {
        super(props)
        this.selectEmail = this.selectEmail.bind(this);
        this.markAsUnread = this.markAsUnread.bind(this);
        this.sendToTrash = this.sendToTrash.bind(this);
        this.markAsSpam = this.markAsSpam.bind(this);
        this.showList = this.showList.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(loadEmails());
    }

    selectEmail(email) {
        this.props.dispatch(activeEmail(email));
    }

    markAsUnread() {
        this.props.dispatch(markAsUnread());
    }

    markAsSpam() {
        this.props.dispatch(markAsSpam());
    }

    sendToTrash() {
        this.props.dispatch(sendToTrash());
    }

    showList(type) {
        this.props.dispatch(showList(type));
    }

    render() {
        return (
            <div className='container'>
                <Sidebar emails={this.props.emails} onClick={this.selectEmail} list={this.props.list} showList={this.showList} />
                <MainArea email={this.props.activeEmail} markAsUnread={this.markAsUnread} markAsSpam={this.markAsSpam} sendToTrash={this.sendToTrash} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    emails: state.emails.items,
    activeEmail: state.emails.currentItem,
    list: state.emails.list
});

export default connect(
    mapStateToProps
)(EmailClientContainer);