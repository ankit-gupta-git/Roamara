const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const { validateReview, authenticateToken, isReviewAuthor } = require("../middlewares/auth.js");

const reviewController = require("../controllers/reviews.js");

router.post("/", authenticateToken, validateReview, wrapAsync(reviewController.createReview));

router.delete("/:reviewId", authenticateToken, isReviewAuthor, wrapAsync(reviewController.destroyReview));

module.exports = router;