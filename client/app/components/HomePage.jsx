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
                    <h2 className="marketing-site-features-headline">Yeti Approved Features</h2>
                    <p className="marketing-site-features-subheadline subheader">Lorem ipsum dolor sit amet, consectetur adipisicing elit quaerat eos words and phrases.</p>
                    <div className="row">
                        <div className="small-12 medium-3 columns">
                            <i className="fa fa-snowflake-o" aria-hidden="true" />
                            <h4 className="marketing-site-features-title">Special Snowflake</h4>
                            <p className="marketing-site-features-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                        <div className="small-12 medium-3 columns">
                            <i className="fa fa-angellist" aria-hidden="true" />
                            <h4 className="marketing-site-features-title">Friendly Forms </h4>
                            <p className="marketing-site-features-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                        <div className="small-12 medium-3 columns">
                            <i className="fa fa-bullseye" aria-hidden="true" />
                            <h4 className="marketing-site-features-title">Special Snowflake</h4>
                            <p className="marketing-site-features-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                        <div className="small-12 medium-3 columns">
                            <i className="fa fa-battery-full" aria-hidden="true" />
                            <h4 className="marketing-site-features-title">Lithium Ion</h4>
                            <p className="marketing-site-features-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
                <div className="marketing-site-content-section">
                    <div className="marketing-site-content-section-img">
                        <img src="https://images.pexels.com/photos/256046/pexels-photo-256046.jpeg?h=350&auto=compress&cs=tinysrgb" alt="" />
                    </div>
                    <div className="marketing-site-content-section-block">
                        <h3 className="marketing-site-content-section-block-header">Yeti Snowcone Agency</h3>
                        <p className="marketing-site-content-section-block-subheader subheader">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam omnis, maxime libero natus qui minus!</p>
                        <a href="#" className="round button small">learn more</a>
                    </div>
                    <div className="marketing-site-content-section-block small-order-2 medium-order-1">
                        <h3 className="marketing-site-content-section-block-header">Yeti Snowcone Agency</h3>
                        <p className="marketing-site-content-section-block-subheader subheader">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam omnis, maxime libero natus qui minus!</p>
                        <a href="#" className="round button small">learn more</a>
                    </div>
                    <div className="marketing-site-content-section-img small-order-1 medium-order-2">
                        <img src="https://images.pexels.com/photos/300857/pexels-photo-300857.jpeg?h=350&auto=compress&cs=tinysrgb" alt="" />
                    </div>
                </div>
                <footer className="marketing-site-footer">
                    <div className="row medium-unstack">
                        <div className="medium-4 columns">
                            <h4 className="marketing-site-footer-name">Yeti Snowcone</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita dolorem accusantium architecto id quidem, itaque nesciunt quam ducimus atque.</p>
                            <ul className="menu marketing-site-footer-menu-social simple">
                                <li><a href="#"><i className="fa fa-youtube-square" aria-hidden="true" /></a></li>
                                <li><a href="#"><i className="fa fa-facebook-square" aria-hidden="true" /></a></li>
                                <li><a href="#"><i className="fa fa-twitter-square" aria-hidden="true"/></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="marketing-site-footer-bottom">
                        <div className="row large-unstack">
                            <div className="column">
                                <ul className="menu marketing-site-footer-bottom-links">
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">News</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </div>
                            <div id="copyright" className="column float-right">
                                <p>&copy; 2017 No rights reserved</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default HomePage