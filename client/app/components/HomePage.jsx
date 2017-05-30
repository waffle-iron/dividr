import React from 'react'
import {Link} from 'react-router'

class HomePage extends React.Component {
    render () {
        return (
            <div>
                <div className="marketing-site-hero">
                    <div className="marketing-site-hero-content small-12 medium-11 column">
                        <h1 className="tagline">Divide Portions Easier</h1>
                        <p className="subheader">A quick tool to make cooking easier</p>
                        <Link to="/signup" className="round button">Sign Up!</Link>
                    </div>
                </div>
                <div className="marketing-site-features">
                    <h2 className="marketing-site-features-headline">Features:</h2>
                    <div className="row">
                        <div className="small-12 medium-4 columns text-center">
                            <i className="fa fa-clock-o" aria-hidden="true" />
                            <h4 className="marketing-site-features-title">Quick Setup</h4>
                            <p className="marketing-site-features-desc">Get an account and your first weeks meals set up in less than 10 minutes</p>
                        </div>
                        <div className="small-12 medium-4 columns text-center">
                            <i className="fa fa-check" aria-hidden="true" />
                            <h4 className="marketing-site-features-title">Easy to use </h4>
                            <p className="marketing-site-features-desc">An intuitive interface makes it simple to use and work with</p>
                        </div>
                        <div className="small-12 medium-4 columns text-center">
                            <i className="fa fa-money" aria-hidden="true" />
                            <h4 className="marketing-site-features-title">Free to use</h4>
                            <p className="marketing-site-features-desc">Dividr will always be free to use indefinitely, so no extra cost</p>
                        </div>
                    </div>
                </div>
                <div className="marketing-site-content-section">
                    <div className="marketing-site-content-section-img">
                        <img src="https://images.unsplash.com/photo-1471367029819-38078e88c3fb?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg=" alt="" />
                    </div>
                    <div className="marketing-site-content-section-block">
                        <h3 className="marketing-site-content-section-block-header">Make Food Prep Easy</h3>
                        <p className="marketing-site-content-section-block-subheader subheader">No more eyeballing portions and coming up short, this works out the exact amount per portion size</p>
                    </div>
                    <div className="marketing-site-content-section-block small-order-2 medium-order-1">
                        <h3 className="marketing-site-content-section-block-header">Works on mobile</h3>
                        <p className="marketing-site-content-section-block-subheader subheader">No need to memorise measurements, the app works on mobile just as well as desktop</p>
                    </div>
                    <div className="marketing-site-content-section-img small-order-1 medium-order-2">
                        <img src="https://images.unsplash.com/photo-1430163393927-3dab9af7ea38?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg=" alt="" />
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage