require('./../config/passport');

const express = require('express');
const router = express.Router();
const passport = require('passport');

// Middleware to require login/auth
const requireAuth = passport.authenticate('jwt', { session: false });
//const requireLogin = passport.authenticate('local', { session: false });


const {listMeals, getMeal, createMeal, updateMeal, deleteMeal, newWeek} = require('./../controllers/meals/meals');

router.get('/', requireAuth, listMeals);

router.post('/', requireAuth, createMeal);

router.get('/:id', requireAuth, getMeal);

router.delete('/:id', requireAuth, deleteMeal);

router.delete('/', requireAuth, newWeek);

router.patch('/:id', requireAuth,  updateMeal);

module.exports = router;