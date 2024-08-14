const jwt = require('jsonwebtoken');


const generateToken =   (user) => {
    const token =  jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    return token;
};

const verifyToken = (token) => {
    return  jwt.verify(token, process.env.JWT_SECRET);
};

module.exports = {
    generateToken,
    verifyToken
};
