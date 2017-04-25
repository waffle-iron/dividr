// NPM imports
const request = require('supertest');
const expect = require('expect');
const {ObjectID} = require('mongodb');

// Local files
const app = require('./../app');
const {Meal} = require('./../models/meal');
const {meals, populateMeals} = require('./seed/seed');



beforeEach(populateMeals);

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

describe('DELETE /meals/:id', () => {
    it('should delete a meal', (done) => {
        let hexId = meals[0]._id.toHexString();
        request(app)
            .delete(`/meals/${meals[0]._id.toHexString()}`)
            .expect(200)
            .expect((res) => {
                expect(res.body.meal._id).toBe(hexId);
            })
            .end((err) => {
                if(err) {
                    return done(err)
                }
                Meal.findById(hexId).then((meal) => {
                    expect(meal).toNotExist();
                    done();
                }).catch((e) => done(e));
            })
    });

    it('should return a 404 if meal not found', (done) => {
        let hexId = new ObjectID().toHexString();
        request(app)
            .delete(`/meals/${hexId}`)
            .expect(404)
            .end(done);
    });

    it('should return a 404 if malformed id is sent', (done) => {
        request(app)
            .delete('/meals/123abc')
            .expect(404)
            .end(done);
    });

});

describe('PATCH /meals/:id', () => {
    it('should update a meal if a valid request is sent', (done) => {
        let id = meals[0]._id.toHexString();
        let mealName = 'Testing update route';

        request(app)
            .patch(`/meals/${id}`)
            .send({
                mealName
            })
            .expect(200)
            .expect((res) => {
                expect(res.body.meal.mealName).toBe(mealName);
            })
            .end(done);
    });

    it('should return a 404 if meal is not found', (done) => {
        let id = new ObjectID().toHexString();
        let mealName = 'Testing update route';
        request(app)
            .patch(`/meals/${id}`)
            .send({ mealName })
            .expect(404)
            .end(done);
    });

    it('should return a 404 if malformed id is sent', (done) => {
        request(app)
            .patch('/meals/123abc')
            .expect(404)
            .end(done);
    });
});