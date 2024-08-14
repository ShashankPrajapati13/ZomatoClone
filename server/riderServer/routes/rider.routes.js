const express = require('express');
const router = express.Router();
const riderController = require('../controllers/riderController.js');

router.post('/riders', riderController.createRider);
router.get('/riders', riderController.getAllRiders);
router.get('/riders/:id', riderController.getRiderById);
router.put('/riders/:id', riderController.updateRider);
router.delete('/riders/:id', riderController.deleteRider);

module.exports = router;
