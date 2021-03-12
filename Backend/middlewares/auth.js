const jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next) => {
    const token = req.headers['x-access-token'];
    if (!token) {
        return res.status(403).json({
            auth: false,
            message: 'Token não encontrado'
        });
    };


    jwt.verify(token, 'projeto', (err, decoded) => {
        if (err) {
            return res.status(300).json({
                auth: false,
                message: 'Falha ao autenticar'
            });
        };
        req.userid = decoded.id
        next();
    });
};

module.exports = verifyJWT