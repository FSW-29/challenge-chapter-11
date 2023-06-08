const express = require('express')
const route = express.Router()
const GameController = require('../controllers/gameController')

route.get('/', GameController.getGame)

module.exports = route