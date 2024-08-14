const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');
const isUserAuthenticated = require('../auth/authenticateToken.js');

router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/getuser', isUserAuthenticated, userController.getUser);
router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
