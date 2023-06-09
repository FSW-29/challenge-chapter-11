const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');
const registerController = require('../controllers/registerController');

router.post('/api/v1/login', loginController.login);
router.post('/api/v1/register', registerController.registerUser);

module.exports = router;