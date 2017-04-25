// NPM imports
const request = require('supertest');
const expect = require('expect');
const {ObjectID} = require('mongodb');

// Local files
const app = require('./../app');
const {Meal} = require('./../models/meal');

const meals = [
    {
        _id : new ObjectID(),
        mealName : 'meal 1',
        cookedWeight : 1000,
        servings : 5,
        portionSize : 200
    },
    {
        _id : new ObjectID(),
        mealName : 'meal 2',
        cookedWeight : 3000,
        servings : 5,
        portionSize : 600
    }
];

beforeEach((done) => {
    Meal.remove({}).then(() => {
        return Meal.insertMany(meals);
    }).then(() => done());
});

describe('GET /meals', () => {
    it('should get all the meals', (done) => {
        request(app)
            .get('/meals')
            .expect(200)
            .expect((res) => {
                expect(res.body.length).toBe(2);
            })
            .end(done);
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

describe('GET /meals/:id', () => {
    it('should return a specific meal', (done) => {
        request(app)
            .get(`/meals/${meals[0]._id.toHexString()}`)
            .expect(200)
            .expect((res) => {
                expect(res.body.meal.mealName).toBe(meals[0].mealName);
            })
            .end(done);
    });
    it('should return a 404 if not found', (done) => {
        request(app)
            .get('/meals/asd')
            .expect(404)
            .end(done);
    });
    it('should return a 404 if doc not found', (done) => {
        let hexId = new ObjectID().toHexString();

        request(app)
            .get(`/meals/${hexId}`)
            .expect(404)
            .end(done);
    });
});
