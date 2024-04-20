const UserModel = require('../model/UserModel');
const bcrypt  = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.UserRegister = async (req, res) => {

    try {
        const {name, email, password} = req.body;
        if (name==null && email==null && password==null){
            return res.json({status:'warning', response: 'All fields are required'}); 
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        await UserModel.create({name:name,email:email,password:hashedPassword});
        res.json({status:'success', response: 'User Registration successfully'});
    } catch (error) {
        res.json({status:'error', response: error.message});
    }

}


exports.UserLogin = async (req, res) => {

    try {
        const {email, password} = req.body;
        if(email==null && password==null){
            return res.json({status:'warning', response: 'All fields are required'});
        }

        const user = await UserModel.findOne({email:email});
        if (user==null){
            return res.json({status:'error', response: 'User not found'});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch){
            return res.json({status:'warning', response: 'Invalid password'});
        }

        const token = jwt.sign({email: email}, 'foodappiExHusband', {
            expiresIn: 86400
        });

        res.json({status:'success', response: 'User login successfully', token: token});

    } catch (error) {
        res.json({status:'error', response: error.message});
    }

}