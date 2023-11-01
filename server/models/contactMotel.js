const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')

const Schema = mongoose.Schema

const Contact = new Schema({
    name:{type: mongoose.Schema.Types.String, ref: "name"},
    email: {type: mongoose.Schema.Types.String, ref: "email"},
    message: { type: String}
}, {
    timestamps: true
})

Contact.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: true,
})

module.exports = mongoose.model('Contact', Contact)

