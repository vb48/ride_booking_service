const mongoose = require('mongoose');
// const Ride = require('./rideModel');
// const User = require('./userModel');

const bookingSchema = new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    ride: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ride",
      required: true
    },
    status: {
      type: String,
      enum: ['booked', 'cancelled'], // validator for status
      default: 'booked'
    }
});


const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking