const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const constants = require('../config/constants');

router.post('/login', (req, res) => {

    if(req.body.username === 'admin' && req.body.password === 'admin')
    {
        let payload = {

            username: 'admin',
            roles: ['ADMIN', 'USER'],
            email: 'admin@email.com'
        };

        let token = jwt.sign({ payload }, constants.JWT_SECRET, {
            
                expiresIn: 300
            });

        res.status(200).send({ auth: true, token: token});
    }
    else
    {
        res.status(500).send('Invalid login!');
    }
});

module.exports = router;