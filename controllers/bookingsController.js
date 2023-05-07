const Booking = require('../models/bookingsModel');

exports.createBooking = async (req, res) => {
  try {
    const booking = new Booking({
      user:req.body.user,
      ride:req.body.ride
    });
    await booking.save();
    res.status(200).json({ message: 'Booking created successfully', booking });
  } catch (err) {
    console.error(err)
  }
};

exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json({ bookings });
  } catch (err) {
    console.error(err)
  }
};

exports.getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.status(200).json({ booking });
  } catch (err) {
    console.error(err)
  }
};

exports.updateBookingById = async (req, res, next) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.json({ message: 'Booking not found' });
    }
    else{
      booking.user = req.body.user || booking.user
      booking.ride = req.body.ride || booking.ride
      booking.status = req.body.status || booking.status
      booking.save()
      res.status(200).json({ message: 'Booking updated successfully', booking });
    }
  } catch (err) {
    console.error(err)
  }
};

exports.deleteBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    await booking.remove()
    res.json({ message: `${booking._id} Booking deleted successfully` });
  } catch (err) {
    console.error(err)
  }
};


