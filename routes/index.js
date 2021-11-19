// Import express router
const express = require('express')
const router = express.Router()

// Import sub routers
const home = require('./modules/home')
const redirect = require('./modules/redirect')


router.use('/', home)
router.use('/teenyurl', redirect)

// Export route module
module.exports = router