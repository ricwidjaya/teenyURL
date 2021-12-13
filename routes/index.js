// Import express router
const express = require("express")
const router = express.Router()

// Import sub routers
const home = require("./modules/home")
const teenyurl = require("./modules/teenyurl")

router.use("/", home)
router.use("/teenyurl", teenyurl)

// Export route module
module.exports = router
