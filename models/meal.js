const mongoose = require('mongoose');

let Meal = mongoose.model('Meal', {
    mealName : {
        type : String,
        required : true,
        minlength : 1,
        trim : true
    },
    cookedWeight : {
        type : Number,
        required : true,
        min: 1
    },
    servings : {
        type : Number,
        required : true,
        min : 1
    },
    portionSize : {
        type : Number,
        required : true,
        min : 1
    },
    _creator : {
        required : true,
        type : mongoose.Schema.Types.ObjectId
    }
});

module.exports = {Meal};