const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MealSchema = new Schema({
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

MealSchema.pre('save', function (next) {
    this.portionSize = this.cookedWeight / this.servings;
    next();
});

MealSchema.post('findOneAndUpdate', function (result) {
    if(result) {
        result.portionSize = result.cookedWeight / result.servings;
    }
});

const Meal = mongoose.model('Meal', MealSchema);

module.exports = {Meal};