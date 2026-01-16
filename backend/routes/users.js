const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { authenticateToken } = require("../middlewares/auth");

const userController = require("../controllers/users.js");

router
    .route("/signup")
    .post(wrapAsync(userController.signup));

router
    .route("/login")
    .post(passport.authenticate("local", { session: false }), userController.login);

router.get("/logout", authenticateToken, userController.logout);

module.exports = router;