const express = require('express')
const route = express.Router()
const LoginController= require('../controllers/loginController')

route.get('/', LoginController.getLogin)

module.exports = route