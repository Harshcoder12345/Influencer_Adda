const express = require('express')
const { userCheckBooking, userCheckBookings, userAddBooking } = require('../controllers/bookingController')
const private = require('../middleware/authmiddleware')

const router = express.Router()


router.get('/:bid', private, userCheckBooking)
router.get('/',private, userCheckBookings)
router.post('/:id',private, userAddBooking  )

router.use("/:bid/comment", require("./commentRoutes"))



module.exports = router