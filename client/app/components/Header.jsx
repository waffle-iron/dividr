import React from 'react'
import {Link} from 'react-router'
import Auth from '../modules/Auth'

class Header extends React.Component {

        render() {
            const rightButtons = () => {
                if(Auth.isUserAuthenticated()) {
                    return (
                    <ul className="menu">
                        <li><Link to='/logout'>Log out</Link></li>
                    </ul>
                    )
                } else {
                    return (
                        <ul className="menu">
                            <li><Link to="/login">Log in</Link></li>
                            <li><Link to='/signup'>Sign Up</Link></li>
                        </ul>
                    )
                }
            };

            return (
                <div className="top-bar">
                    <div className="top-bar-left">
                        <ul className="dropdown menu">
                            <li className="menu-text">Dividr</li>
                        </ul>
                    </div>
                    <div className="top-bar-right">
                            {rightButtons()}
                    </div>
                </div>
            )
        }
}

export default Header