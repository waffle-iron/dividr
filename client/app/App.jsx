import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import $ from 'jquery';

import Main from 'Components/Main';
import HomePage from 'Components/HomePage';
import LoginPage from 'Components/LoginPage';
import LogoutPage from 'Components/LogoutPage';
import SignUpPage from 'Components/SignUpPage';
import MealList from 'Components/MealList';

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
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignUpPage} />
            <Route path="/meallist" component={MealList}/>
            <IndexRoute component={HomePage} />
        </Route>
    </Router>,
    document.getElementById('root'));