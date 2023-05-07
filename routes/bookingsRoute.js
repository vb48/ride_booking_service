const express = require('express');
const bookingsController = require('../controllers/bookingsController');

const router = express.Router();

// POST new bookings
router.post('/', bookingsController.createBooking);

// GET all bookings
router.get('/', bookingsController.getAllBookings);

// GET bookings by id
router.get('/:id', bookingsController.getBookingById);

// UPDATE a booking by id
router.put('/:id', bookingsController.updateBookingById);

// DELETE a booking by id
router.delete('/:id', bookingsController.deleteBookingById);

module.exports = router;