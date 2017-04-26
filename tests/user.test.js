const request  = require('supertest');
const expect = require('expect');
const bcrypt = require('bcrypt-nodejs');

const {mongoose} = require('mongoose');
// Local files
const app = require('./../app');
const User = require('./../models/user');

const validUser = [{ password: encryptPassword('secret'), lastName: 'Doe', firstName: 'John', email: 'johndoe@exampledomain.com' },
                    { password: encryptPassword('secret'), lastName: 'Doe', firstName: 'John', email: 'johndoe2@exampledomain.com' }];
const validUser2 = { password: encryptPassword('secret'), lastName: 'Doe', firstName: 'John', email: 'johndoe3@exampledomain.com' };

beforeEach((done) => {
    User.remove({}).then(() => {
        return User.insertMany(validUser);
    }).then(() => done());
});

function encryptPassword  (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

describe('POST /register', () => {
    it('should FAIL [422] to create a user without parameters', (done) => {
        request(app)
            .post('/register')
            .expect(422)
            .end((err, res) => {
                if (err) done(err);

                expect(res.body.error).toEqual('You must enter an email address.');
                done();
            });
    });

    it('should FAIL [422] to create a user with incomplete parameters', (done) => {
        request(app)
            .post('/register')
            .send({ email: 'johndoe@exampledomain.com', lastName: 'Doe', firstName: 'John' })
            .expect(422)
            .end((err, res) => {
                if (err) done(err);
                expect(res.body.error).toEqual('You must enter a password.');
                done();
            });
    });

    it('should CREATE [201] a valid user', (done) => {
        request(app)
            .post('/register')
            .send(validUser2)
            .expect(201)
            .end((err, res) => {
                if (err) done(err);
                expect(res.body.token).toBeA('string');
                expect(res.body.user).toBeA('object');
                done();
            });
    });

    it('should FAIL [422] to create a user with occupied email', (done) => {
        request(app)
            .post('/register')
            .send(validUser[0])
            .expect(422)
            .end((err, res) => {
                if (err) done(err);
                expect(res.body.error).toEqual('That email address is already in use.');
                done();
            });
    });
});

describe('POST /login', () => {
    before((done) => {
        request(app)
            .post('/register')
            .send(validUser2)
            .expect(201)
            .end((err) => {
                if (err) done(err);
                done();
            });
    });

    it('should FAIL [400] to login without parameters', (done) => {
        request(app)
            .post('/login')
            .expect(400, done);
    });

    it('should FAIL [400] to login with bad parameters', (done) => {
        request(app)
            .post('/login')
            .send({ wrongparam: 'err' })
            .expect(400, done);
    });

    it('should FAIL [401] to login with invalid credentials', (done) => {
        request(app)
            .post('/login')
            .send({ email: 'err', password: '22' })
            .expect(401, done);
    });

    it('should LOGIN [200] with valid credential', (done) => {
        request(app)
            .post('/login')
            .send({
                email: "johndoe@exampledomain.com",
                password: "secret"
            })
            .expect(200)
            .end((err, res) => {
                if (err){
                    done(err);
                }
                expect(res.body.token).toBeA("string");
                expect(res.body.user).toBeA("object");
                done();
            });
    });
});