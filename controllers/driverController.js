const Driver = require('../models/driverModel');

exports.getAllDrivers = async (req, res) => {
  try {
    const drivers = await Driver.find();
    res.status(200).json({drivers});
  } catch (error) {
    res.json({ message: error.message });
  }
};

exports.getDriverById = async (req, res) => {
  try {
    const driver = await Driver.findById(req.params.id);
    res.status(200).json({driver});
  } catch (error) {
    res.json({ message: error.message });
  }
};
 
exports.createDriver = async (req, res) => {
  const driver = new Driver({
    name: req.body.name,
    contact: req.body.contact,
  });

  try {
    const newDriver = await driver.save();
    res.status(200).json({newDriver});
  } catch (error) {
    res.json({ message: error.message });
  }
};

exports.updateDriverById = async (req, res) => {
  try {
    const updatedDriver = await Driver.findById(req.params.id,);
    if (updatedDriver) {
      updatedDriver.name = req.body.name || updatedDriver.name;
      updatedDriver.email = req.body.email || updatedDriver.email;
    const updateduser = await updatedDriver.save();
    res.status(200).json(updateduser);
  } else {
    res.json({ message: 'Driver not found' });
  } 
  } catch (error) {
    res.json({ message: error.message });
  }
};

exports.deleteDriverById = async (req, res) => {
  try {
    const driver  = await Driver.findByIdAndDelete(req.params.id);
    if (!driver) {
      return res.json({ message: 'Driver not found' });
    }
    await driver.remove();
    res.status(200).send({message : `${driver.name} Deleted Driver`});
  } catch (error) {
    res.json({ message: error.message });
  }
};