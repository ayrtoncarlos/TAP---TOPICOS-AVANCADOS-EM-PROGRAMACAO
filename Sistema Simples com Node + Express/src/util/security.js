const jwt = require('jsonwebtoken');
const constants = require('../config/constants');

const security = {

    authorizeJWT: (req, res, next) => {

        if(!req.headers.authorization || req.headers.authorization.split(' ')[0] !== 'Bearer')
        {
            return res.status(401).send({ auth: false, message: 'Uninformed token.' });
        }

        let token = req.headers.authorization.split(' ')[1];

        jwt.verify(token, constants.JWT_SECRET, (err, decoded) => {

            if(err)
            {
                return res.status(500).send({

                    auth: false, message: 'Unidentified token.'
                });
            }

            req.user = {

                username: decoded.username,
                roles: decoded.roles,
                email: decoded.email
            };

            next();
        });
    }
}

module.exports = security;