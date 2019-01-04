const express = require('express')
const router = express.Router()

// @route   get /index
// @desc    index route
// @access  Public
router.get('/', (req, res) => {
	// render index view
	res.render("index")
})

module.exports = router;