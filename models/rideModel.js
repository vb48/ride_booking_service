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
  driver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Dirver",
    required: true
  }
});

const Ride = mongoose.model('Ride', rideSchema)

module.exports = Ride