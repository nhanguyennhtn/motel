const billModel = require('../models/billModel')

const billController = {
    handleRead: (req, res, next) => {
        billModel.find()
            .then(bills => res.status(200).json({ bills }))
            .catch(next)
    },
    handleCreate: (req, res, next) => {
        const billNew = new billModel(req.body)
        billNew.save()
            .then(() => res.json({ Bill: billNew }))
            .catch(next)
    },
    handleDelete: (req, res, next) => {
        const _id = req.params.id
        billModel.deleteOne({ _id })
            .then(bill => res.status(200).json({ bill }))
            .catch(next)
    }
}

module.exports = billController