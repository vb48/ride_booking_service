const express = require('express');
const router = express.Router();

const ridesController = require('../controllers/ridesController');

//  creating a new ride
router.post('/', ridesController.createRide);

// retrieving all ride
router.get('/', ridesController.getAllRides);

//  retrieving a single ride by ID
router.get('/:id', ridesController.getRideById);

//  retrieving all bookings for a particular ride by ID
router.get('/:id/bookings', ridesController.getRideBookingsById);

//  updating a ride by ID
router.put('/:id', ridesController.updateRideById);

//  deleting a ride by ID
router.delete('/:id', ridesController.deleteRideById);

module.exports = router;
