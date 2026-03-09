const express = require('express')
const { createInfluencer, updateInfluencer, deleteInfluencer, getAllBookings, updateBooking, getallUsers, getallComments } = require('../controllers/adminController')
const adminProtect = require('../middleware/adminmiddleware')


const router = express.Router()


router.post('/influencer', adminProtect, createInfluencer)
router.put('/influencer/:id',adminProtect, updateInfluencer)
router.delete('/influencer/:id',adminProtect, deleteInfluencer )
router.get('/bookings',adminProtect, getAllBookings)
router.put('/bookings/:id', updateBooking)
router.get('/users/',adminProtect, getallUsers)
router.get('/comments',adminProtect, getallComments)



module.exports = router