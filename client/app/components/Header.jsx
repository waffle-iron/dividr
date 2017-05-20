import React from 'react'
import {Link} from 'react-router'
import Auth from '../modules/Auth'

class Header extends React.Component {

    render() {
        return (
            <div>
                {Auth.isUserAuthenticated() ? (
                <ul>
                    <li><Link to='/logout'>Logout</Link></li>
                </ul>
                ) : (
                <ul>
                    <li><Link to='/'>Login</Link></li>
                    <li><Link to="/signup">Sign up</Link></li>
                </ul>
                )}
            </div>
        )
    }
}

export default Header