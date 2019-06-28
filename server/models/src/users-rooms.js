const mongoose = require('mongoose');

const UsersRoomsSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    room: { type: mongoose.Schema.Types.ObjectId, ref: 'Room' }
});

module.exports = mongoose.model('Users-Rooms', UsersRoomsSchema);
