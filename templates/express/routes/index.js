const express = require('express')
const router = express.Router()

// @route   get /index
// @desc    index route
// @access  Public
router.get('/', (req, res) => {
	res.send('it works!')
})

module.exports = router;