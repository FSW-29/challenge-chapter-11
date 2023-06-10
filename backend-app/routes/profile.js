const express = require('express')
const route = express.Router()
const ProfileController=require("../controllers/profileController")


route.get('/', ProfileController.getProfile)
// route.post('/picture', ProfileController.getProfilePicture)
// route.post('/updatePicture',ProfileController.updateProfilePicture)
// route.post('/setToken',ProfileController.setToken)
route.post('/', ProfileController.editProfile)

module.exports = route