const User = require('../models/userModel');
 
exports.getAllUsers = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json({user});
  } catch (error) {
    res.json({ message: error.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      res.status(200).json({user});
    } else {
      res.json({ message: 'User not found' });
    }
  } catch (error) {
    res.json({ message: error.message });
  }
};

exports.createUser = async (req, res) => {
  const user = new User({
    name:req.body.name,
    email:req.body.email
  });
  try {
    const newuser = await user.save();
    res.status(200).json({newuser});
  } catch (error) {
    res.json({ message: error.message });
  }
};

exports.updateUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
      const updateduser = await user.save();
      res.status(200).json(updateduser);
    } else {
      res.json({ message: 'user not found' });
    }
  } catch (error) {
    res.json({ message: error.message });
  }
};

exports.deleteUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      await user.remove();
      res.json({ message: `${user.name} User deleted successfully` });
    } else {
      res.status(404).json({ message: 'user not found' });
    }
  } catch (error) {
    res.json({ message: error.message });
  }
};
