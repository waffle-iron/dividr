import React from 'react'
import {Link} from 'react-router'

class HomePage extends React.Component {
    render () {
        return (
            <div className="marketing-site-hero">
                <div className="marketing-site-hero-content">
                    <h1>Divide Portions Easier</h1>
                    <p className="subheader">A quick tool to make cooking easier</p>
                    <Link to="/signup" className="round button">Sign Up!</Link>
                </div>
            </div>
        )
    }
}

export default HomePage