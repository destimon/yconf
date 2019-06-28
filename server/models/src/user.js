const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');

const UserSchema = new mongoose.Schema({
    googleId: { type: Number, required: true, unique: true },
    displayName: { type: String, required: true, unique: false }
});

UserSchema.plugin(paginate);

module.exports = mongoose.model('User', UserSchema);
