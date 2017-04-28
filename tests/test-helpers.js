const request = require('supertest');

// Auxiliary function. Takes server from express, a valid login user and returns a loginToken and userId through the done callback
function createLoginToken(server, loginDetails, done) {
    request(server)
        // POST request to /login
        .post('/api/v1/login')
        // Send valid user loginDetails
        .send(loginDetails)
        .end(function(error, response) {
            // If error thrown return that
            if (error) {
                throw error;
            }
            // Else set variable to value of res.body token
            let loginToken = response.body.token;
            // Else set variable to value of res.body user ID
            let userId = response.body.user._id;
            // Return above variables for use in requests
            done(loginToken, userId);
        });
}

module.exports = {
    createLoginToken
};