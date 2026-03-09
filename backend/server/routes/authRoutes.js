const express = require('express')
const { registeruser, loginuser, privateController, } = require('../controllers/authController')
// const protect = require('../middleware/authmiddleware')
const private = require('../middleware/authmiddleware')

const router = express.Router()




router.post('/register', registeruser)
router.post('/login',  loginuser)
router.post('/private',private, privateController)


module.exports = router


