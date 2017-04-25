// NPM imports
const request = require('supertest');
const expect = require('expect');


// Local files
const app = require('./../app');

describe('GET /meals', () => {
    it('should return a 200', (done) => {
        request(app)
            .get('/meals')
            .expect(200, done);
    });
});

describe('POST /meals', () => {
    it('should create a new meal', (done) => {
        let mealName = 'Casserole';
        let cookedWeight = 1000;
        let servings = 5;

        request(app)
            .post('/meals')
            .send({
                mealName,
                cookedWeight,
                servings
            })
            .expect(200)
            .expect((res) => {
                expect(res.body.mealName).toBe(mealName);
                expect(res.body.cookedWeight).toBe(cookedWeight);
                expect(res.body.servings).toBe(servings);
            })
            .end((err) => {
                if(err) {
                    return done(err);
                }
            });
    });
});