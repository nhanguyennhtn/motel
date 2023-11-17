const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')

const Schema = mongoose.Schema

const Bill = new Schema({
    fullname: { type: mongoose.Schema.Types.String, ref: "User" },
    name: { type: mongoose.Schema.Types.String, ref: "User" },
    email: { type: mongoose.Schema.Types.String, ref: "User" },
    sophong: { type: mongoose.Schema.Types.String, ref: "Room" },
    gia: { type: mongoose.Schema.Types.String, ref: "Room" },
    ngay: { type: String }
}, {
    timestamps: true
})

Bill.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: true,
})

module.exports = mongoose.model('Bill', Bill)

