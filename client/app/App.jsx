import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import jquery from 'jquery';
window.$ = window.jQuery = jquery;
require('foundation-sites');
require("font-awesome/css/font-awesome.min.css");


import Main from 'Components/Main';
import HomePage from 'Components/HomePage';
import LoginPage from 'Components/LoginPage';
import LogoutPage from 'Components/LogoutPage';
import SignUpPage from 'Components/SignUpPage';
import MealList from 'Components/MealList';
import NewWeek from 'Components/NewWeek';

import 'style-loader!css-loader!sass-loader!./styles/app.scss';
import 'script-loader!./../node_modules/jquery/dist/jquery.min'
import 'script-loader!./../node_modules/foundation-sites/dist/js/foundation.min'

$(document).ready(function(){
    $(document).Foundation;
});

ReactDOM.render(
    <Router history={hashHistory} >
        <Route path="/" component={Main} >
            <Route path="/logout" component={LogoutPage} />
            <Route path="/newweek" component={NewWeek} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignUpPage} />
            <Route path="/meallist" component={MealList}/>
            <IndexRoute component={HomePage} />
        </Route>
    </Router>,
    document.getElementById('root'));