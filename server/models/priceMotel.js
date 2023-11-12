const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')

const Schema = mongoose.Schema

const Price = new Schema({
    name:{type: mongoose.Schema.Types.String, ref: "User"},
    sophong:{type: mongoose.Schema.Types.String, ref: "Room"},
    date: {type: String},
    gia: { type: String}
}, {
    timestamps: true
})

Price.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: true,
})

module.exports = mongoose.model('Price', Price)

