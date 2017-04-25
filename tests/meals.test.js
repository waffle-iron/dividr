// NPM imports
const request = require('supertest');
const expect = require('expect');


// Local files
const app = require('./../app');
const {Meal} = require('./../models/meal');

beforeEach((done) => {
    Meal.remove({}).then(() => done());
});

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
        let portionSize = 200;

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
                expect(res.body.portionSize).toBe(portionSize);
            })
            .end((err) => {
                if (err) {
                    return done(err);
                }
                Meal.find({mealName}).then((meals) => {
                    expect(meals.length).toBe(1);
                    expect(meals[0].mealName).toBe(mealName);
                    done();
                }).catch((e) => done(e))
        });
    });

    it('should not create a meal with incorrect data', (done) => {
        let mealName = 'Casserole';
        let cookedWeight = 'falafel';
        let servings = 5;
        request(app)
            .post('/meals')
            .send({
                mealName,
                cookedWeight,
                servings
            })
            .expect(400, done);
    });

    it('should not create a meal with no data sent', (done) => {
        request(app)
            .post('/meals')
            .send({})
            .expect(400, done);
    });
});
