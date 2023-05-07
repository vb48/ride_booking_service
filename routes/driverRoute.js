const express = require('express');
const router = express.Router();
const driverController = require('../controllers/driverController');

// GET all drivers
router.get('/', driverController.getAllDrivers);
 
// GET driver by ID
router.get('/:id', driverController.getDriverById);
 
// POST create driver
router.post('/', driverController.createDriver);

// PUT update driver by ID
router.put('/:id', driverController.updateDriverById);
 
// DELETE driver by ID
router.delete('/:id', driverController.deleteDriverById);

module.exports = router;