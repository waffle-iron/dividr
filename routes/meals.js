const express = require('express');
const router = express.Router();

const meal_controller = require('./../controllers/meals/meals');

router.get('/', (req, res, next) => {
    res.send('Some meals');
});

router.post('/', meal_controller.createMeal);

module.exports = router;