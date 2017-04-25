const {mongoose} = require('mongoose');
const {ObjectID} = require('mongodb');

const {Meal} = require('./../../models/meal');

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

const populateMeals = (done) => {
    Meal.remove({}).then(() => {
        return Meal.insertMany(meals);
    }).then(() => done());
};

module.exports = {
    meals,
    populateMeals
};