import React from 'react';
import Header from './Header';


class Main extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <div className="row content">
                    <div className="small-centered medium-6 large-4 column">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }

}

module.exports = Main;