const Listing = require("../models/listing");
const ExpressError = require("../utils/ExpressError.js");

module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.json({ success: true, listings: allListings });
}

module.exports.showListing = async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id)
        .populate({
            path: "reviews",
            // Remove populate author since it is now a String ID
        });
        // Remove populate owner
    if(!listing) {
        return res.status(404).json({ success: false, message: "Listing not found" });
    }
    res.json({ success: true, listing });
}

module.exports.createListing = async (req, res, next) => {
    let url = req.file.path;
    let filename = req.file.filename;
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.auth.userId; // Clerk ID
    newListing.ownerName = req.body.listing.ownerName; // Provided by frontend
    newListing.ownerAvatar = req.body.listing.ownerAvatar;
    newListing.image = { url, filename };
    await newListing.save();
    res.status(201).json({ success: true, listing: newListing, message: "New Listing Created!" });
}

module.exports.updateListing = async (req, res) => {
    let {id} = req.params;
    let listing = await Listing.findByIdAndUpdate(id, {...req.body.listing}, { new: true });

    if(typeof req.file !== "undefined") {
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = { url, filename };
        await listing.save();
    }

    res.json({ success: true, listing, message: "Listing Updated!" });
}

module.exports.destroyListing = async (req, res) => {
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    res.json({ success: true, message: "Listing Deleted!" });
}