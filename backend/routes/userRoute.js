// backend/routes/userRoutes.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Sign up
router.post('/signup', userController.signup);

// Log in
router.post('/login', userController.login);

// Get user by ID
router.get('/:id', userController.getUserById);

module.exports = router;
