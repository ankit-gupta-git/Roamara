const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
    googleId: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true
    },
    avatar: String
});

module.exports = mongoose.model('User', userSchema);