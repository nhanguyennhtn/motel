const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')

const Schema = mongoose.Schema

const Room = new Schema({
    sophong: { type: String, unique: true },
    anh: { type: String },
    kichthuoc: { type: String },
    mota: { type: String },
    gia: { type: String },
    isOrdered: Boolean

}, {
    timestamps: true
})

Room.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: true,
})

module.exports = mongoose.model('Room', Room)