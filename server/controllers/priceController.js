const priceMotel = require('../models/priceMotel')

const priceController = {
    handleRead: (req, res, next) => {
        priceMotel.find()
            .then(prices => res.status(200).json({ prices }))
            .catch(next)
    },
    handleCreate: (req, res, next) => {

        const priceNew = new priceMotel(req.body)
        priceNew.save()
            .then(() => res.status(200).json({ Price: priceNew }))
            .catch(next)
    },
    handleUpdete: (req, res, next) => {
        const _id = req.params._id
        priceMotel.updateOne({ _id }, res.body)
            .then(price => res.status(200).json({ price }))
            .catch(next)
    },
    handleDelete: (req, res, next) => {
        const _id = req.params._id
        if (!_id)
            return res.status(400).json({
                message: 'Địa chỉ người dùng không chính xác, không thể xóa'
            })

        priceMotel.delete({ _id })
            .then(price => res.status(200).json({ price }))
            .catch(next)
    }
    
}

module.exports = priceController