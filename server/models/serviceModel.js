const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')

const Schema = mongoose.Schema

const Room = new Schema({
    ten: { type: String, unique: true },
    anh: {type: String },
    mota: { type: String },
    gia: { type: String }

}, {
    timestamps: true
})

Room.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: true,
})

module.exports = mongoose.model('Room', Room)