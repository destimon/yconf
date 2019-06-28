const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');

const RoomSchema = new mongoose.Schema({
    roomName: { type: String, required: true, unique: false },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

RoomSchema.plugin(paginate);

module.exports = mongoose.model('Room', RoomSchema);
