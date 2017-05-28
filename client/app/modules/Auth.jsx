import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Auth {

    /**
     * Authenticate a user. Save a token string in Local Storage
     *
     * @param {string} token
     */
    static authenticateUser(token) {
        cookies.set('Authorization', token, {path: '/', maxAge: 10080});
        //localStorage.setItem('token', token);
    }

    /**
     * Check if a user is authenticated - check if a token is saved in Local Storage
     *
     * @returns {boolean}
     */
    static isUserAuthenticated() {
        return cookies.get('Authorization') !== undefined;
        //return localStorage.getItem('token') !== null;
    }

    /**
     * Deauthenticate a user. Remove a token from Local Storage.
     *
     */
    static deauthenticateUser() {
        cookies.remove('Authorization');
        //localStorage.removeItem('token');
    }

    /**
     * Get a token value.
     *
     * @returns {string}
     */

    static getToken() {
        return cookies.get('Authorization');
        //return localStorage.getItem('token');
    }

}

export default Auth;