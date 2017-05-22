import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router';

const SignUpForm = ({
                        onSubmit,
                        onChange,
                        errors,
                        user,
                    }) => (
    <div className="form-registration">
        <figure className="form-registration-img">
            <img src="https://images.pexels.com/photos/221205/pexels-photo-221205.jpeg?h=350&auto=compress&cs=tinysrgb" alt="" />
            <figcaption className="form-registration-img-caption form-title">Sign up</figcaption>
        </figure>

        <form className="form-registration-group" action="/" onSubmit={onSubmit}>
                <label htmlFor="firstName">First Name:</label>
                <input className="form-registration-input" type="text" id="firstName" name="firstName" onChange={onChange} />

                <label htmlFor="lastName">Last Name:</label>
                <input className="form-registration-input" type="text" id="lastName" name="lastName" onChange={onChange}/>

                <label htmlFor="email">E-mail:</label>
                <input className="form-registration-input" type="text" id="email" name="email" onChange={onChange}/>

                <label htmlFor="password">Password:</label>
                <input className="form-registration-input" type="password" id="password" name="password" onChange={onChange}/>

                <button type="submit" className="button form-registration-submit-button">Create New Account</button>

            <p>Already have an account? <Link to='/login'>Log in</Link></p>
        </form>
    </div>
);

SignUpForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
};

export default SignUpForm;