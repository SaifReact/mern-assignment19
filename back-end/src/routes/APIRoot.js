const express = require('express')
const router = express.Router();
const {UserRegister, UserLogin} = require('../controller/UserController');
const { UserAuthentication } = require('../middleware/UserAuth');
const { AddFood, ReadFood, UpdateFood, DeleteFood } = require('../controller/FoodController');

//User Router
router.post('/register', UserRegister)
router.get('/login', UserLogin)


//Food Router
router.post('/add-food', UserAuthentication, AddFood);
router.get('/read-food', UserAuthentication, ReadFood);
router.put('/update-food/:id', UserAuthentication, UpdateFood);
router.delete('/delete-food/:id', UserAuthentication, DeleteFood);



module.exports = router;