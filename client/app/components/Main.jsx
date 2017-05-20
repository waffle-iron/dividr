import React from 'react';
import Header from './Header';


class Main extends React.Component {

    render() {
        return (
            <div>
                <Header className="header" />
                {this.props.children}
            </div>
        )
    }

}

module.exports = Main;