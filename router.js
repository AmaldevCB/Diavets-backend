const express = require('express')
const { postContent, postImage, getContent, getImage, submitContactForm } = require('./controller')

const router = new express.Router()

// post content
router.post('/post-content',postContent)

// post image
router.post('/post-image',postImage)

// get content
router.get('/get-content',getContent)

// get image
router.get('/get-image',getImage)

// contact
router.post('/contact', submitContactForm)

module.exports = router