import React from 'react';
import PropTypes from 'prop-types'
import axios from 'axios'
import SignUpForm from '../components/SignUpForm.jsx';


class SignUpPage extends React.Component {

    /**
     * Class constructor.
     */
    constructor(props, context) {
        super(props, context);

        // set the initial component state
        this.state = {
            errors: {},
            user: {
                email: '',
                firstName: '',
                lastName: '',
                password: ''
            }
        };

        this.processForm = this.processForm.bind(this);
        this.changeUser = this.changeUser.bind(this);
    }



    /**
     * Process the form.
     *
     * @param {object} event - the JavaScript event object
     */
    processForm(event) {
        // prevent default action. in this case, action is the form submission event
        event.preventDefault();

        // create a string for an HTTP body message
        const firstName = encodeURIComponent(this.state.user.firstName);
        const lastName = encodeURIComponent(this.state.user.lastName);
        const email = this.state.user.email;
        const password = encodeURIComponent(this.state.user.password);

        axios
            .post('/api/v1/register', {
                email,
                password,
                firstName,
                lastName
            })
            .then((response) => {
                this.context.router.replace('/login');
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    /**
     * Change the user object.
     *
     * @param {object} event - the JavaScript event object
     */
    changeUser(event) {
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;

        this.setState({
            user
        });
    }

    /**
     * Render the component.
     */
    render() {
        return (
            <SignUpForm
                onSubmit={this.processForm}
                onChange={this.changeUser}
                errors={this.state.errors}
                user={this.state.user}
            />
        );
    }

}

SignUpPage.contextTypes = {
    router: PropTypes.object.isRequired
};

export default SignUpPage;