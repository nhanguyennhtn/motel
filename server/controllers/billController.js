const billModel = require('../models/billModel')

const billController = {
    handleRead: (req, res, next) => {
        billModel.find()
            .then(contacts => res.status(400).json({ contacts }))
            .catch(next)
    },
    handleCreate: (req, res, next) => {
        const billNew = new billModel(req.body)
        billNew.save()
            .then(() => res.status(400).json({ Bill: billNew }))
            .catch(next)
    },
    handleDelete: (req, res, next) => {
        const _id = req.params._id
        if (!_id)
            return res.status(400).json({
                message: 'Địa chỉ người dùng không chính xác, không thể xóa'
            })

        billModel.deleteOne({ _id })
            .then(contact => res.status(400).json({ contact }))
            .catch(next)
    }
}

module.exports = billController