const {mongoose} = require('mongoose');
const {ObjectID} = require('mongodb');
const bcrypt = require('bcrypt-nodejs');

const {Meal} = require('./../../models/meal');
const User = require('./../../models/user');
const app = require('./../../app');

function encryptPassword  (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

const userOneId = new ObjectID();
const userTwoId = new ObjectID();

const validUsers = [{ _id: userOneId, password: encryptPassword('secret'), lastName: 'Doe', firstName: 'John', email: 'johndoe@exampledomain.com' },
    { _id: userTwoId, password: encryptPassword('secret'), lastName: 'Doe', firstName: 'John', email: 'johndoe2@exampledomain.com' }];

const validUser2 = { password: encryptPassword('secret'), lastName: 'Doe', firstName: 'John', email: 'johndoe3@exampledomain.com' };

const populateUsers = (done) => {
    User.remove({}).then(() => {
        return User.insertMany(validUsers);
    }).then(() => done());
};

const meals = [
    {
        _id : userOneId,
        mealName : 'meal 1',
        cookedWeight : 1000,
        servings : 5,
        portionSize : 200,
        _creator : validUsers[0]._id
    },
    {
        _id : userTwoId,
        mealName : 'meal 2',
        cookedWeight : 3000,
        servings : 5,
        portionSize : 600,
        _creator : validUsers[1]._id
    }
];

const populateMeals = (done) => {
    Meal.remove({}).then(() => {
        return Meal.insertMany(meals);
    }).then(() => done());
};

module.exports = {
    meals,
    validUsers,
    validUser2,
    populateUsers,
    populateMeals
};