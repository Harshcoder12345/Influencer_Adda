
const User = require('../models/userModel')
const Influencer = require('../models/InfluencerModel')
const Booking = require('../models/bookingModel')
const AsyncHandler = require('express-async-handler')




const userCheckBookings = AsyncHandler(async(req, res) => {
 const myBookings = await Booking.find({user : req.user._id}).populate('influencer')

if(!myBookings){
  res.status(400)
  throw new Error('No Booking is Found')
}
res.status(200).json(myBookings)

  })


const userCheckBooking = AsyncHandler(async(req, res) => {
  const myBooking = await Booking.findById(req.params.bid).populate('influencer')

  if(!myBooking){
    res.status(400)
    throw new Error('No Booking is Found')
  }
  res.status(200).json(myBooking)
  })






const userAddBooking = AsyncHandler(async(req, res) => {

  const influencer = await Influencer.findById(req.params.id)

  if(!influencer){
      res.status(400);
      throw new Error('Influencer Not exist')
  }


  // const alreadyBooked = await Booking.findOne({influencer : req.params.id})

  // if(alreadyBooked){
  //   res.status(404)
  //   throw new Error('Booking Already Exists')
  // }

    // const alreadyBooked = await Booking.findOne({ influencer: req.params.id });

  // if (alreadyBooked) {
  //   res.status(404);
  //   throw new Error("Booking Already Exist!");
  // }


// Update influencer
  await Influencer.findByIdAndUpdate(influencer._id, {isActive : false}, {new:true})



  const newBooking = await Booking.create({
   user : req.user._id,
   influencer : influencer._id,
   status : "pending",
  })

  if(!newBooking){
    res.status(400)
    throw new Error('Booking not created')
  }
  res.status(201).json(newBooking)
})

module.exports = {userAddBooking, userCheckBooking, userCheckBookings}


