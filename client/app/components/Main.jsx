import React from 'react';
import Header from './Header';


class Main extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <div className="content">
                        {this.props.children}
                </div>
            </div>
        )
    }

}

module.exports = Main;