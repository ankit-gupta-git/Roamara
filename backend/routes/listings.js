const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { authenticateToken, isOwner, validateListing } = require("../middlewares/auth.js");
const listingController = require("../controllers/listings.js");
const multer  = require('multer');
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

router
    .route("/")
    .get(wrapAsync(listingController.index))
    .post(authenticateToken, upload.single('listing[image]'), validateListing, wrapAsync(listingController.createListing));

router
    .route("/:id")
    .get(wrapAsync(listingController.showListing))
    .put(authenticateToken, isOwner, upload.single('listing[image]'), validateListing, wrapAsync(listingController.updateListing))
    .delete(authenticateToken, isOwner, wrapAsync(listingController.destroyListing));

module.exports = router;