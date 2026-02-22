const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/bookings.js");
const { authenticateToken } = require("../middlewares/auth.js");

// All booking routes require authentication
router.post("/", authenticateToken, bookingController.createBooking);
router.get("/user", authenticateToken, bookingController.getUserBookings);

module.exports = router;
