import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router';

import FlashMessage from 'Components/FlashMessage';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let {errors, onSubmit, onChange, user} = this.props;
        return (
            <div>
                {errors.errors.statusMessage && <FlashMessage message={errors.errors.statusMessage} messageType="alert"/>}
                <div className="form-registration">
                    <figure className="form-registration-img">
                        <img src="https://images.pexels.com/photos/221205/pexels-photo-221205.jpeg?h=350&auto=compress&cs=tinysrgb" alt="" />
                        <figcaption className="form-registration-img-caption form-title">Sign up</figcaption>
                    </figure>

                    <form id="registration-form" className="form-registration-group" action="/" onSubmit={onSubmit}>
                        <label htmlFor="email">E-mail:</label>
                        <input className="form-registration-input" type="text" id="email" name="email" onChange={onChange}/>

                        <label htmlFor="firstName">First Name:</label>
                        <input className="form-registration-input" type="text" id="firstName" name="firstName" onChange={onChange} />

                        <label htmlFor="lastName">Last Name:</label>
                        <input className="form-registration-input" type="text" id="lastName" name="lastName" onChange={onChange}/>

                        <label htmlFor="password">Password:</label>
                        <input className="form-registration-input" type="password" id="password" name="password" onChange={onChange}/>

                        <button type="submit" className="button form-registration-submit-button">Create New Account</button>

                        <p>Already have an account? <Link to='/login'>Log in</Link></p>
                    </form>
                </div>
            </div>
        )
    }
}

SignUpForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
};

export default SignUpForm;