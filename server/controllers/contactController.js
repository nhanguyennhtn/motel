const contactModel = require('../models/contactModel')

const contactController = {
    handleRead: (req, res, next) => {
        contactModel.find()
            .then(contacts => res.status(400).json({ contacts }))
            .catch(next)
    },
    handleCreate: (req, res, next) => {

        const contactNew = new contactModel(req.body)
        contactNew.save()
            .then(() => res.status(400).json({ Contact: contactNew }))
            .catch(next)
    },
    handleUpdete: (req, res, next) => {
        const _id = req.params._id
        contactModel.updateOne({ _id }, res.body)
            .then(contact => res.status(400).json({ contact }))
            .catch(next)
    },
    handleDelete: (req, res, next) => {
        const _id = req.params._id
        if (!_id)
            return res.status(400).json({
                message: 'Địa chỉ người dùng không chính xác, không thể xóa'
            })

        contactModel.delete({ _id })
            .then(contact => res.status(400).json({ contact }))
            .catch(next)
    }

}

module.exports = contactController