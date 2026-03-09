const express = require('express')
const { getallInfluencer, getInfluencer, searchInfluencer } = require('../controllers/influencerController')

const router = express.Router()


router.get('/', getallInfluencer)
router.get('/single/:id', getInfluencer)
router.get('/search', searchInfluencer)



module.exports = router