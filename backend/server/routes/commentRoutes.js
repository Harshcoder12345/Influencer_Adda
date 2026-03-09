const express = require('express')
const { getComment, addComment } = require('../controllers/commentController')
const private = require('../middleware/authmiddleware')

const router = express.Router({mergeParams: true})


router.get('/', private, getComment)
router.post('/',private, addComment)



module.exports = router