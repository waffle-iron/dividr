import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {message: 'Static'};

    componentDidMount() {
      fetch('/api/v1/')
          .then((res) => res.json())
          .then((message) => this.setState(message));

    }

    render() {
        return (
            <div className="App">
                <h1>Message</h1>
                <p>
                    {this.state.message}
                </p>
            </div>
        );
    }
}

export default App;
