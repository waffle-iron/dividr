const request = require('supertest');

// Auxiliary function.
function createLoginToken(server, loginDetails, done) {
    request(server)
        .post('/login')
        .send(loginDetails)
        .end(function(error, response) {
            if (error) {
                throw error;
            }
            let loginToken = response.body.token;
            let userId = response.body.user._id;
            done(loginToken, userId);
        });
}

module.exports = {
    createLoginToken
};