const express = require('express');
const router = express.Router();

const {listMeals, getMeal, createMeal, updateMeal, deleteMeal} = require('./../controllers/meals/meals');

router.get('/', listMeals);

router.post('/', createMeal);

router.get('/:id', getMeal);

router.delete('/:id', deleteMeal);

router.patch('/:id',  updateMeal);

module.exports = router;