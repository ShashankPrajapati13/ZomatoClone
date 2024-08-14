const jwt = require('jsonwebtoken');
const asyncHandler = require('../utils/asyncHandler');

const generateToken =  asyncHandler((user) => {
    return jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1d' });
});

const verifyToken = asyncHandler((token) => {
    return  jwt.verify(token, process.env.JWT_SECRET);
});

module.exports = {
    generateToken,
    verifyToken
};
