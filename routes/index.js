const express = require("express");
const router = express.Router();
const AuthRoutes = require("./auth_routes")
const EventRoutes = require("./event_routes")
const passport =  require("passport")

router.get("/", (req, res) => res.send("Welcome"))
router.use("/auth", AuthRoutes)
router.use("/events", passport.authenticate("jwt", {session: false}), EventRoutes)

module.exports = router;