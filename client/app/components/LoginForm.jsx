import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const LoginForm = ({
                       onSubmit,
                       onChange,
                       errors,
                       successMessage,
                       user
                   }) => (
        <form action="/" onSubmit={onSubmit}>
            <h2>Log In</h2>


            {successMessage && <p>{successMessage}</p>}
            {errors.summary && <p>{errors.summary}</p>}

            <div>
                <label htmlFor="email">E-mail:</label>
                <input type="text" name="email" onChange={onChange} />
            </div>

            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" onChange={onChange}/>
            </div>

            <div>
                <button type="submit" label="Log in">Log In</button>
            </div>

            Don't have an account? <Link to={'/signup'}>Create one</Link>.
        </form>
);

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    successMessage: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired
};

export default LoginForm;
