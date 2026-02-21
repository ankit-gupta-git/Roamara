const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/bookings.js");
const { clerkMiddleware, requireAuth } = require('@clerk/express');

// All booking routes require authentication
router.post("/", requireAuth(), bookingController.createBooking);
router.get("/user", requireAuth(), bookingController.getUserBookings);

module.exports = router;
