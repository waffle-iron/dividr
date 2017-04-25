const {Meal} = require('./../../models/meal');

let createMeal = (req, res) => {
    let meal = new Meal({
        mealName : req.body.mealName,
        cookedWeight : req.body.cookedWeight,
        servings : req.body.servings,
        portionSize: req.body.cookedWeight / req.body.servings
    });

    meal.save().then((doc) => {
        res.send(doc)
    }, (e) => {
        res.status(400).send(e);
    });
};

module.exports = {
    createMeal
};