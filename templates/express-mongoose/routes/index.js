const express = require('express')
const router = express.Router()

// Load Users Model
const User = require('../models/User')

// @route   get /index/users
// @desc    index route
// @access  Public
router.get('/users', async (req, res) => {
	try {
		const users = await User.find()

		if(!users) {
			return res.json({ error: false, message: "No users found" })
		}
		res.json({ error: false, message: "Users found!", data: users})

	} catch(e) {
		res.json({ error: true, message: "Internal Server Error" })
	}
})

module.exports = router;