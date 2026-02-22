const express = require("express");
const router = express.Router();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const jwt = require("jsonwebtoken");
const User = require("../models/user");

// Passport Strategy Configuration
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL
},
async (accessToken, refreshToken, profile, done) => {
    try {
        let user = await User.findOne({ googleId: profile.id });
        
        if (!user) {
            user = new User({
                googleId: profile.id,
                email: profile.emails[0].value,
                username: profile.displayName,
                avatar: profile.photos[0].value
            });
            await user.save();
        }
        return done(null, user);
    } catch (err) {
        return done(err, null);
    }
}));

// Auth Routes
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get("/google/callback", 
    passport.authenticate("google", { session: false }),
    (req, res) => {
        const user = req.user;
        const token = jwt.sign(
            { id: user._id, email: user.email, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );
        
        // Redirect back to frontend with token
        // In production, you might want to use a more secure way to pass the token
        const frontendUrl = process.env.FRONTEND_URL || "http://localhost:5173";
        res.redirect(`${frontendUrl}/auth-success?token=${token}`);
    }
);

module.exports = router;
