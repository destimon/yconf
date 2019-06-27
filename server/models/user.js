const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    googleId: { type: Number, required: true, unique: true },
    displayName: { type: String, required: true, unique: false }
});

module.exports = mongoose.Model('User', UserSchema);
