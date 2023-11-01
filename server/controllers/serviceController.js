const serviseModel = require('../models/serviceModel')


const roomController = {
    handleRead: async (req, res, next) => {
        serviseModel.find()
            .then(services => res.status(200).json({ services }))
            .catch(next)
    },
    
    handleCreate: (req, res, next) => {
        const { sophong, anh, kichthuoc, mota, gia } = req.body
        if (!sophong || !anh || !kichthuoc || !mota || !gia)
            return res.status(500).json({
                errMessage: 'Vui lòng điền đầy đủ thông tin.'
            })

        const roomNew = new roomModel(req.body)
        roomNew.save()
            .then(() => res.status(200).json({
                room: roomNew
            }))
            .catch(next)
    },

    handleUpdate: (req, res, next) => {
        const _id = req.params.id
        const { sophong, anh, kichthuoc, mota, gia } = req.body
        if (!sophong || !anh || !kichthuoc || !mota || !gia)
            return res.status(500).json({
                errMessage: 'Vui lòng điền đầy đủ thông tin.'
            })

        roomModel.updateOne({ _id }, req.body)
            .then(room => res.status(200).json({
                room
            }))
            .catch(next)
    },

    handleDelete: (req, res, next) => {
        const _id = req.params.id
        if (!_id)
            return res.status(500).json({
                errMessage: 'Vui lòng điền đầy đủ thông tin.'
            })

        roomModel.deleteOne({ _id })
            .then(room => res.status(200).json({
                room
            }))
            .catch(next)
    }
}

module.exports = roomController
