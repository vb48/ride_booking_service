const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Retrieve all users
router.get('/', userController.getAllUsers);

// Retrieve a single user by id
router.get('/:id', userController.getUserById);

// Create a new user
router.post('/', userController.createUser);

// Update an existing user by id
router.put('/:id', userController.updateUserById);

// Delete a user by id
router.delete('/:id', userController.deleteUserById);

module.exports = router;
