if(process.env.NODE_ENV != "production") {
    require('dotenv').config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const cors = require("cors");
const { clerkMiddleware } = require('@clerk/express'); // Clerk Middleware

// Models (User model not needed forAuth anymore if strictly using Clerk, but keeping if refs exist elsewhere, though we removed refs)
// const User = require("./models/user.js"); 

const listingRouter = require("./routes/listings.js");
const reviewRouter = require("./routes/reviews.js");
const bookingRouter = require("./routes/bookings.js"); // New Booking Routes

const dbUrl = process.env.ATLASDB_URL;

main().then(() => {
    console.log("connected to DB");
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(dbUrl);
}

app.use(cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true
}));

app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(express.json());

// Clerk Middleware - Adds auth state to req
app.use(clerkMiddleware()); 

app.get("/", (req, res) => {
    res.redirect("/api/listings");
});

// API Routes
app.use("/api/listings", listingRouter);
app.use("/api/listings/:id/reviews", reviewRouter);
app.use("/api/bookings", bookingRouter);
// app.use("/api/users", userRouter); // Removed - Clerk handles auth

// Error handling middleware
app.use((err, req, res, next) => {
    let { statusCode=500, message="Something went wrong!" } = err;
    res.status(statusCode).json({ success: false, message });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});