const mongoose = require('mongoose');
// const Booking = require('./bookingsModel');
 
const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    }
});


const User = mongoose.model('User', userSchema);

module.exports = User