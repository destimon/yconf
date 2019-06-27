const mongoose = require('mongoose');

const UsersRoomsSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    roomId: { type: mongoose.Schema.Types.ObjectId, ref: 'Room' }
});

module.exports = mongoose.Model('Users-Rooms', UsersRoomsSchema);
