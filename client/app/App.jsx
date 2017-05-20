import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory, IndexRoute, Route, Router} from 'react-router';

import Main from 'Components/Main';
import MealList from 'Components/Meallist';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <IndexRoute component={MealList}/>

        </Route>
    </Router>,
    document.getElementById('root'));