const { verifyToken } = require('./tokenService');
const ErrorHandler = require('../utils/errorHandler');
const asyncHandler = require('../utils/asyncHandler');

const isUserAuthenticated = asyncHandler((req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1]; 

    if (!token) {
        throw new ErrorHandler(401, "No token provided");
    }

    const { valid, decoded, error } = verifyToken(token);
    if (!valid) {
        throw new ErrorHandler(403, "Invalid token");
    }

    req.user = decoded; 
    next();
});

module.exports = isUserAuthenticated;
