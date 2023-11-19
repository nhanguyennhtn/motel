const contactModel = require('../models/contactModel')

const contactController = {
    handleRead: (req, res, next) => {
        contactModel.find()
            .then(contacts => res.status(200).json({ contacts }))
            .catch(next)
    },
    handleCreate: (req, res, next) => {

        const contactNew = new contactModel(req.body)
        contactNew.save()
            .then(() => res.status(200).json({ Contact: contactNew }))
            .catch(next)
    },
    handleUpdete: (req, res, next) => {
        const id = req.params.id
        contactModel.updateOne({ id }, res.body)
            .then(contact => res.status(200).json({ contact }))
            .catch(next)
    },
    handleDelete: (req, res, next) => {
        const _id = req.params.id
        if (!_id)
            return res.status(500).json({
                errMessage: 'Vui lòng điền đầy đủ thông tin.'
            })

            contactModel.deleteOne({ _id })
            .then(contact => res.status(200).json({
                contact
            }))
            .catch(next)
    }

}

module.exports = contactController