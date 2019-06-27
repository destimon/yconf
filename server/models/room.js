const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
    roomName: { type: String, required: true, unique: false },
    creatorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.Model('Room', RoomSchema);
