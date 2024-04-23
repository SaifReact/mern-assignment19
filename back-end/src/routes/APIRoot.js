const express = require('express')
const router = express.Router();
const { AddFood, ReadFood, ReadFoodbyID, UpdateFood, DeleteFood } = require('../controller/FoodController');


//Food Router
router.post('/add-food', AddFood);
router.get('/read-food', ReadFood);
router.get('/read-food/:id', ReadFoodbyID);
router.put('/update-food/:id', UpdateFood);
router.delete('/delete-food/:id', DeleteFood);



module.exports = router;