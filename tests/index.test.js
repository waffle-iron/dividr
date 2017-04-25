// NPM imports
const request = require('supertest');


// Local files
const app = require('./../app');

describe('GET /', () => {
    it('should return a 200', (done) => {
        request(app)
            .get('/')
            .expect(200, done)
    });
});