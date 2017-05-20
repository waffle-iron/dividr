import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, browserHistory} from 'react-router';

import Main from 'Components/Main';
import HomePage from 'Components/HomePage';
import LoginPage from 'Components/LoginPage';
import LogoutPage from 'Components/LogoutPage';
import SignUpPage from 'Components/SignUpPage';

require('style-loader!css-loader!sass-loader!./styles/app.scss');

ReactDOM.render(
    <Router history={browserHistory} >
        <Route path="/" component={Main} >
            <Route path="/logout" component={LogoutPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignUpPage} />
            <IndexRoute component={HomePage} />
        </Route>
    </Router>,
    document.getElementById('root'));