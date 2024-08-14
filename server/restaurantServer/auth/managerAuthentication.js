const jwt = require('jsonwebtoken');
const { verifyToken } = require('./tokenService');
const asyncHandler = require('../utils/asyncHandler');
const ErrorHandler = require('../utils/errorHandler');

const isManagerAuthenticated = asyncHandler(async (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        throw new ErrorHandler(401, "Authentication token not provided");
    }

    try {
        const decoded = verifyToken(token);
        req.manager = decoded; 
        next();
    } catch (error) {
        throw new ErrorHandler(403, "Invalid authentication token");
    }
});

module.exports = isManagerAuthenticated;
