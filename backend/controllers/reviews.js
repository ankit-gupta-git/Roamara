const Review = require("../models/review");
const Listing = require("../models/listing");
const ExpressError = require("../utils/ExpressError.js");

module.exports.createReview = async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    if(!listing) {
        return res.status(404).json({ success: false, message: "Listing not found" });
    }

    let newReview = new Review(req.body.review);
    newReview.author = req.auth.userId; // Clerk User ID
    newReview.authorName = req.body.review.authorName;
    newReview.authorAvatar = req.body.review.authorAvatar;
    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();

    res.status(201).json({ success: true, review: newReview, message: "Review added successfully" });
}

module.exports.destroyReview = async (req, res) => {
    let { id, reviewId } = req.params;

    await Listing.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);

    res.json({ success: true, message: "Review deleted successfully" });
}