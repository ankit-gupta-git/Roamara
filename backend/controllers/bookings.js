const Booking = require("../models/booking");
const Listing = require("../models/listing");

module.exports.createBooking = async (req, res) => {
    try {
        const { listingId, startDate, endDate, totalPrice } = req.body;
        const bookerId = req.user.id; // JWT User ID

        const booking = new Booking({
            listing: listingId,
            bookerId,
            startDate,
            endDate,
            totalPrice,
            status: 'confirmed' // Auto-confirm for now
        });

        await booking.save();
        res.status(201).json({ success: true, booking });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports.getUserBookings = async (req, res) => {
    try {
        const userId = req.user.id;
        const bookings = await Booking.find({ bookerId: userId }).populate("listing");
        res.status(200).json({ success: true, bookings });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
