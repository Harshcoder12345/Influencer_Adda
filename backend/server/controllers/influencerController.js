const AsyncHandler = require("express-async-handler")
const Influencer = require('../models/InfluencerModel')



const getallInfluencer =AsyncHandler(async(req, res) => {

    const Influencers =await Influencer.find()

    if(!Influencers){
        res.status(400)
        throw new Error('Influncers NOT found')
    }
    res.status(200).json(Influencers)


})  
   

const getInfluencer = AsyncHandler(async(req, res) => {
    const influencer = await Influencer.findById(req.params.id)
    if(!influencer){
        res.status(400)
        throw new Error('No single Influencer is Found')
    }
    res.status(200).json(influencer)
})


const searchInfluencer = async(req, res) => {
    res.send('serarch all influencer')
}


module.exports = {getallInfluencer, getInfluencer, searchInfluencer}