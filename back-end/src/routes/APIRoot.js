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
router.get('/read-food',  ReadFood);
router.put('/update-food/:id', UserAuthentication, UpdateFood);
router.delete('/delete-food/:id', UserAuthentication, DeleteFood);


//URL Test
router.get('*', function (req, res) {
    res.send('Hello World!');
});



module.exports = router;