import Main from 'Components/Main'
import MealList from 'Components/MealList'

import LoginPage from 'Components/LoginPage'
import SignUpPage from 'Components/SignUpPage'

import Auth from './modules/Auth';

const routes = {
    // base component (wrapper for the whole application).
    component: Main,
    childRoutes: [

        {
            path: '/',
            getComponent: (location, callback) => {
                if (Auth.isUserAuthenticated()) {
                    callback(null, MealList);
                } else {
                    callback(null, LoginPage);
                }
            }
        },

        {
            path: '/login',
            component: LoginPage
        },

        {
            path: '/signup',
            component: SignUpPage
        },

        {
            path: '/logout',
            onEnter: (nextState, replace) => {
                Auth.deauthenticateUser();

                // change the current URL to /
                replace('/');
            }
        }

    ]
};

export default routes;