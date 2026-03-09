const AsyncHandler = require("express-async-handler")
const Influencer = require('../models/InfluencerModel')
const Booking = require('../models/bookingModel')
const Users = require('../models/userModel')
const Comments = require('../models/commentModel')

const createInfluencer = AsyncHandler(async(req,res) =>{

    // Check if all the fileds are filled or not 
const {name, niche, followers,  instagram_handle, rate, location, profilepic, gender } = req.body
    if(!name || !niche || !followers || !instagram_handle || !rate || !location || !profilepic || !gender ){
        res.status(400)
       throw new Error('Please fill the all details')
    }

    const InfluencerExist = await Influencer.findOne({instagram_handle})
    if(InfluencerExist){
        res.status(400)
        throw new Error('Influencer already Exist ')
    }



    const newInfluencer = await Influencer.create({
        name, niche, followers,  instagram_handle, rate, location, profilepic, gender 
    })

    if(!newInfluencer){
        res.status(400)
        throw new Error('Influencer Not Created')
    }
    res.status(200).json(newInfluencer)
})




const updateInfluencer = AsyncHandler(async(req,res) => {

    const updatedInfluencer = await Influencer.findByIdAndUpdate(req.params.id, req.body, {new:true})

    if(!updatedInfluencer){
        res.status(400)
        throw new Error('Influencer Not Updated')
    }
    res.status(200).json(updatedInfluencer)
})


const  deleteInfluencer = AsyncHandler(async(req,res) => {
   
    const deletedInfluencer = await Influencer.findByIdAndDelete(req.params.id)

    if(deletedInfluencer){
        res.status(200).json({
            id: req.params.id,
            msg : "Influencer Removed"
        })
    }

})
const getAllBookings = AsyncHandler(async(req,res) => {
    // const allBooking = await Booking.find()
    const allBooking = await Booking.find().populate("user").populate("influencer")

    if(!allBooking){
        res.status(400)
       throw new Error('No Booking is Found')
    }

    res.status(200).json(allBooking)
})
const updateBooking = AsyncHandler(async(req,res) => {
   const updateBooking = await Booking.findByIdAndUpdate(req.params.id, req.body, {new:true}).populate('user').populate('influencer')

  if (req.body.status === "rejected") {
    // Update Influencer Status
    await Influencer.findByIdAndUpdate(updateBooking.influencer._id, { isActive: true })
  }


   if(!updateBooking){
    res.status(400)
    throw new Error('Booking is not update')
   }
   res.status(200).json(updateBooking)
}
)

const getallUsers = AsyncHandler(async(req, res)=> {
    const allUsers = await Users.find().select("-password")
    console.log(allUsers);
    

    if(!allUsers){
        res.status(400)
        throw new Error('No User is found')
    }
    res.status(200).json(allUsers)
})

const getallComments = AsyncHandler(async(req, res)=> {
    const totalComments = await Comments.find().populate('user')
    // console.log(totalComments);
    

    if(!totalComments){
        res.status(400)
        throw new Error(`No Comments is Found`)
    }
    res.status(200).json(totalComments)
})


module.exports = {createInfluencer, updateInfluencer, deleteInfluencer, getAllBookings, updateBooking, getallUsers, getallComments }
