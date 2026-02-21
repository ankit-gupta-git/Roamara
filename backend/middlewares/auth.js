const Listing = require("../models/listing");
const Review = require("../models/review");
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema, reviewSchema } = require("../schema.js");

module.exports.authenticateToken = (req, res, next) => {
    if (!req.auth || !req.auth.userId) {
        return res.status(401).json({ success: false, message: 'Access denied. Please sign in.' });
    }
    next();
};

module.exports.isOwner = async (req, res, next) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    if (!listing) {
        return res.status(404).json({ success: false, message: "Listing not found" });
    }
    // Check if the current user's Clerk ID matches the listing owner
    if (listing.owner !== req.auth.userId) {
        return res.status(403).json({ success: false, message: "You are not the owner of this listing" });
    }
    next();
};

module.exports.validateListing = (req, res, next) => {
    let { error } = listingSchema.validate(req.body);
    if(error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        return res.status(400).json({ success: false, message: errMsg });
    } else {
        next();
    }
};

module.exports.validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
    if(error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        return res.status(400).json({ success: false, message: errMsg });
    } else {
        next();
    }
};

module.exports.isReviewAuthor = async (req, res, next) => {
    let { id, reviewId } = req.params;
    let review = await Review.findById(reviewId);
    if (!review) {
         return res.status(404).json({ success: false, message: "Review not found" });
    }
    if (review.author !== req.auth.userId) {
        return res.status(403).json({ success: false, message: "You are not the author of this review" });
    }
    next();
};
