const mongoose = require('mongoose')

const FoodSchema = new mongoose.Schema({
    foodName: {
        type: String,
        required: true
    },
    foodCode: {
        type: String,
        required: true,
        unique: true
    },
    foodImg: {
        type: String,
        required: true
    },
    foodCategory: {
        type: String,
        required: true
    },
    foodQuantity: {
        type: Number,
        required: true
    },
    foodPrice: {
        type: Number,
        required: true
    }
},{versionKey: false});

const FoodModel = mongoose.model('foods', FoodSchema);
module.exports = FoodModel;