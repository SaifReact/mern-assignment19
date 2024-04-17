const jwt = require('jsonwebtoken');

exports.UserAuthentication = (req, res, next) => {

    try {
        const token = req.headers['token'];
        if (token==null){
            return res.json({status:'warning', message: 'Token is required'}); 
        }

        jwt.verify(token, 'foodappiExHusband', (err, decoded) => {
            if (err) {
                return res.json({status:'error', message: 'Invalid token'});
            }
            req.decoded = decoded;
            next();
        });
        
    } catch (error) {
        res.json({status:'error', message:error.message});
    }

}