const express = require('express')
const router = express.Router()

// Load Users Model
const User = require('../models/User')

// @route   get /index/users
// @desc    index route
// @access  Public
router.get('/users', (req, res) => {
	// return all users
	User.find().then(user => {
		if (!user) {
			return res.json({ message: "No users found" })
		}
		res.json({ data: user })
	})
})

module.exports = router;