const express = require('express');
const router = express.Router();
const restaurantManagerController = require('../controllers/restaurantManagerController.js');


router.post('/register', restaurantManagerController.register);
router.post('/login', restaurantManagerController.login);
router.get('/:id', restaurantManagerController.getManagerById); 
router.get('/', restaurantManagerController.getAllManagers); 
router.put('/:id', restaurantManagerController.updateManager);
router.delete('/:id', restaurantManagerController.deleteManager); 

module.exports = router;
