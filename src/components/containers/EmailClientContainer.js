import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadEmails } from '../../actions/emailActions';
import Sidebar from '../Sidebar';
import MainArea from '../MainArea';

class EmailClientContainer extends Component {

    constructor(props) {
        super(props)
        this.selectEmail = this.selectEmail.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(loadEmails());
    }

    selectEmail(selectedEmail) {
        this.setState({currentEmail: selectedEmail});
    }

    render() {
        return (
            <div className='container'>
                <Sidebar emails={this.props.emails} onClick={this.selectEmail} />
                <MainArea activeEmail={this.props.activeEmail} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    emails: state.emails.items,
    activeEmail: state.emails.currentItem
});

export default connect(
    mapStateToProps
)(EmailClientContainer);