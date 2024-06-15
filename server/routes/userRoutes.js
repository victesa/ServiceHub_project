const express = require('express');
const userController = require('../controllers/userController');
const validateUser = require('../middleware/validateUser');
const router = express.Router();

router.post('/signIn', userController.signInUserController);
router.post('/request-password-reset', userController.requestPasswordReset);
router.post('/reset-password',validateUser, userController.resetPassword);
router.post('/register', validateUser, userController.registerUser);
router.get('/verify-email', userController.verifyUserEmail);

module.exports = router;
