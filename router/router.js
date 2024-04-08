const express = require('express')
const { 
    getVideoData, 
    getVideoDataById, 
    postVideoData, 
    patchVideoViewInc,
    patchVideoVotesUpDate
} = require('../controller/controller')
const router = express.Router()

/** they are same get api */

router.get('/videos' , getVideoData)
router.get('/videos/:id' , getVideoDataById)
router.post('/videos' , postVideoData)

/**they are same patch api  */
router.patch('/videos/:id/views' , patchVideoViewInc)
router.patch('/videos/:id/votes' , patchVideoVotesUpDate)

module.exports = router