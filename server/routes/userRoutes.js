const express = require('express');
const validateUser = require('../middleware/validateUser');
const userController = require('../controllers/userController')
const router = express.Router();

// Define the route handler for user registration under the '/api' namespace
router.post('/register', validateUser, userController.registerUser);

router.post('/signIn', userController.signInUserController)

module.exports = router;
