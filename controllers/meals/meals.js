const {ObjectID} = require('mongodb');
const _ = require('lodash');

const {Meal} = require('./../../models/meal');

let listMeals = (req, res) => {
    Meal.find({
        _creator: req.user._id
    }).then((meals) => {
        res.send(meals)
    }, (e) => {
        res.status(400).send(e);
    });

};

let getMeal = (req, res) => {
    let id = req.params.id;
    if(!ObjectID.isValid(id)) {
        return res.sendStatus(404);
    }
    Meal.findOne({
        _id : id
    }).then((meal) => {
        if(!meal) {
            return res.sendStatus(404);
        }
        res.status(200).send({meal})
    }, () => {
        res.status(404).send();
    });

};

let createMeal = (req, res) => {
    let meal = new Meal({
        mealName : req.body.mealName,
        cookedWeight : req.body.cookedWeight,
        servings : req.body.servings,
        portionSize : req.body.cookedWeight / req.body.servings,
        _creator : req.user._id
    });

    meal.save().then((doc) => {
        res.send(doc)
    }, (e) => {
        res.status(400).send(e);
    });
};

let deleteMeal = (req, res) => {
    let id = req.params.id;
    if(!ObjectID.isValid(id)) {
        return res.sendStatus(404);
    }
    Meal.findOneAndRemove({
        _id : id
    }).then((meal) => {
        if(!meal) {
            return res.sendStatus(404);
        }
        res.status(200).send({meal});
    }).catch((e) => {
        res.sendStatus(400).send(e);
    });
};

let updateMeal = (req, res) => {
    let id = req.params.id;
    let body = _.pick(req.body, ['mealName', 'servings', 'cookedWeight']);
    if(!ObjectID.isValid(id)) {
        return res.sendStatus(404);
    }
    Meal.findOneAndUpdate({
        _id : id
    }, { $set : body}, {new : true}).then((meal) => {
        if(!meal) {
            return res.sendStatus(404);
        }
        res.status(200).send({meal});
    }).catch((e) => {
        res.status(400).send(e);
    })
};

module.exports = {
    createMeal,
    listMeals,
    getMeal,
    deleteMeal,
    updateMeal
};