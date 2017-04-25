const express = require('express');
const router = express.Router();

const meal_controller = require('./../controllers/meals/meals');

router.get('/', meal_controller.listMeals);

router.post('/', meal_controller.createMeal);

router.get('/:id', meal_controller.getMeal);

module.exports = router;