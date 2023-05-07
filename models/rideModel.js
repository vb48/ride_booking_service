const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
  startLocation: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  },
  bookings: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Booking",
    required: true
  }
});

const Ride = mongoose.model('Ride', rideSchema)

module.exports = Ride