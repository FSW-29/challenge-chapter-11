const express = require('express')
const route = express.Router()
const ProfileController=require("../controllers/profileController")


route.get('/', ProfileController.getProfile)
route.post('/', ProfileController.editProfile)

module.exports = route