const Ride = require('../models/rideModel');
const Booking = require('../models/bookingsModel')

// Create a new Ride
exports.createRide = async (req, res) => {
  try {
    const { startLocation, destination, driver } = req.body;
    const ride = new Ride({
      startLocation,
      destination,
      driver
    });
    const savedRide = await ride.save();
    res.status(201).json({savedRide});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Retrieve all Rides
exports.getAllRides = async (req, res) => {
  try {
    const Rides = await Ride.find();
    res.json({Rides});
  } catch (err) {
    res.json({ message: err.message });
  }
};

// Retrieve a single Ride by ID
exports.getRideById = async (req, res) => {
  try {
    const ride = await Ride.findById(req.params.id);
    if (!ride) {
      return res.status(404).json({ message: 'Ride not found' });
    }
    res.json(ride);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// Retrieve all bookings for a particular Ride by ID
exports.getRideBookingsById = async (req, res) => {
  try {
    // const ride = await Ride.findById(req.params.id)
    const bookings = await Booking.find({ride: req.params.id})
    if (!bookings) {
      return res.status(404).json({ message: 'booking not found' });
    }
    res.json({bookings});
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// Update a Ride by ID
exports.updateRideById = async (req, res) => {
  try {
    const { startLocation, destination, driver } = req.body;
    const ride = await Ride.findById(req.params.id);
    if (!ride) {
      return res.status(404).json({ message: 'Ride not found' });
    }
    else {
      ride.startLocation = startLocation || ride.startLocation;
      ride.destination = destination || ride.destination;
      ride.driver = driver || ride.driver;
      const updatedRide = await ride.save();
      res.json(updatedRide);
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a Ride by ID
exports.deleteRideById = async (req, res) => {
  try {
    const ride = await Ride.findById(req.params.id);
    if (!ride) {
      return res.status(404).json({ message: 'Ride not found' });
    }
    await ride.remove();
    res.json({ message:`${ride} Ride deleted` });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
