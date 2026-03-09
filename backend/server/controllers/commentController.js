const AsyncHandler = require("express-async-handler")
const Comment = require('../models/commentModel')


const addComment = AsyncHandler(async(req, res) => {
       
    if(!req.body.text){
        res.status(400)
        throw new Error('Please Enter Your Comments')
    }

    const comment = await Comment.create({
        user : req.user._id,
        booking : req.params.bid,
        text : req.body.text
    })

    if(!comment){
        res.status(400)
        throw new Error("Comments not created")
    }

    const newComment = await Comment.findById(comment._id).populate('user').populate('booking')

    res.status(200).json(newComment)

        }
)



const getComment = AsyncHandler(async(req, res) => {
    const allcomments = await Comment.find({booking: req.params.bid}).populate('user')
   
   
    if(!allcomments){
        res.status(400)
        throw new Error('No comments Found')
    }
    res.status(200).json(allcomments)
    
    })


module.exports = {addComment, getComment}