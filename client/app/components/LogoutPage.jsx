import React from 'react';
import PropTypes from 'prop-types';
import Auth from '../modules/Auth';

class LogoutPage extends React.Component {
    componentWillMount() {
        Auth.deauthenticateUser();
    }

    componentDidMount() {
        this.context.router.replace('/');
    }

    render() {
        return null
    }
}

LogoutPage.contextTypes = {
    router: PropTypes.object.isRequired
};

export default LogoutPage;