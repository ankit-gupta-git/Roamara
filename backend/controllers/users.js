const User = require("../models/user.js");
const jwt = require("jsonwebtoken");

const generateToken = (user) => {
    return jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET, {
        expiresIn: '7d'
    });
};

module.exports.signup = async (req, res) => {
    try {
        let { username, email, password } = req.body;
        const newUser = new User({email, username});
        const registeredUser = await User.register(newUser, password);

        const token = generateToken(registeredUser);

        res.status(201).json({
            success: true,
            message: "Welcome to Wanderlust",
            user: { id: registeredUser._id, username: registeredUser.username, email: registeredUser.email },
            token
        });
    } catch(e) {
        res.status(400).json({ success: false, message: e.message });
    }
}

module.exports.login = async(req, res) => {
    const token = generateToken(req.user);
    res.json({
        success: true,
        message: "Welcome back to Wanderlust!",
        user: { id: req.user._id, username: req.user.username, email: req.user.email },
        token
    });
}

module.exports.logout = (req, res, next) => {
    // For JWT, logout is handled on client side by removing token
    res.json({ success: true, message: "Logged out successfully" });
}