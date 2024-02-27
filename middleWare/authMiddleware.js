const jwt = require('jsonwebtoken');


function generateAccessToken(user) {
    return jwt.sign({ email: user.email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
}


function generateRefreshToken(user) {
    return jwt.sign({ email: user.email }, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '1d'});
}


function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Forbidden' });
        }
        req.user = user;
        next();
    });
}

module.exports = { generateAccessToken, generateRefreshToken, authenticateToken };
