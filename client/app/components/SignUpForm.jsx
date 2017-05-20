import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router';

const SignUpForm = ({
                        onSubmit,
                        onChange,
                        errors,
                        user,
                    }) => (

        <form action="/" onSubmit={onSubmit}>
            <h2>Sign Up</h2>

            {errors.summary && <p>{errors.summary}</p>}

            <div>
                <label htmlFor="firstName">First Name:</label>
                <input type="text" name="firstName" onChange={onChange} />
            </div>

            <div>
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" name="lastName" onChange={onChange}/>
            </div>

            <div>
                <label htmlFor="email">E-mail:</label>
                <input type="text" name="email" onChange={onChange}/>
            </div>

            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" onChange={onChange}/>
            </div>

            <div>
                <button type="submit">Create New Account</button>
            </div>

            <p>Already have an account? <Link to={'/login'}>Log in</Link></p>
        </form>
);

SignUpForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
};

export default SignUpForm;