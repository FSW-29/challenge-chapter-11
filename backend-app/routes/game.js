const express = require('express')
const route = express.Router()
const GameController = require('../controllers/gameController')

route.get('/', GameController.getGame)
route.post('/', GameController.checkGame)

module.exports = route