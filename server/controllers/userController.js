const userModel = require('../models/userModel')
const bcrypt = require('bcrypt')

const userController = {
    handleRead: (req, res, next) => {
        userModel.find()
            .then(allUsers => res.status(200).json({
                allUsers
            }))
            .catch(next)
    },
    handleReadOne: (req, res, next) => {
        userModel.findOne({ _id: req.params.id })
            .then(user => {
                if (!user) {
                    return res.status(404).json({ message: 'User not found' });
                }
                res.status(200).json({ user });
            })
            .catch(err => next(err));
    },

    handleTrash: (req, res, next) => {
        userModel.findDeleted(_id)
            .then(allUsers => res.status(200).json({
                allUsers
            }))
            .catch(next)
    },

    handleRegister: (req, res, next) => {
        const { fullname, username, password, email, role } = req.body
        if (!fullname || !username || !password || !email || !role)
            return res.status(500).json({
                errMessage: 'Vui lòng điền đầy đủ thông tin.'
            })

        userModel.findOne({ username })
            .then(user => {
                if (user)
                    return res.status(500).json({
                        errMessage: 'Tên tài khoản đã tồn tại.'
                    })

                const passwordHash = bcrypt.hashSync(password, 8)
                const newUser = new userModel({
                    fullname,
                    username,
                    password: passwordHash,
                    email,
                    role,
                })

                newUser.save()
                    .then(user => {
                        const userInfo = user.toObject()
                        delete userInfo.password
                        return res.status(200).json({ status: true, userInfo, success: 'Người dùng đăng ký thành công' })
                    })
                    .catch(next)
            })
            .catch(next)
    },

    handleLogin: (req, res, next) => {
        const { username, password } = req.body
        if (!username || !password)
            return res.status(500).json({
                errMessage: 'Vui lòng điền đầy đủ thông tin.'
            })

        userModel.findOne({ username })
            .then(user => {
                if (!user)
                    return res.status(500).json({
                        errMessage: 'Tên tài khoản không tồn tại.'
                    })

                const rs = bcrypt.compareSync(password, user.password)
                if (!rs)
                    return res.status(500).json({
                        errMessage: 'Mật khẩu không chính xác.'
                    })

                const userInfo = user.toObject()
                delete userInfo.password

                return res.status(200).json({ status: true, userInfo })
            })
            .catch(next)
    },

    handleUpdate: (req, res, next) => {
        const _id = req.params.id
        const { fullname, username, password } = req.body

        if (!_id || !fullname || !username || !password)
            return res.status(500).json({
                errMessage: 'Vui lòng điền đầy đủ thông tin.'
            })

        const passwordHash = bcrypt.hashSync(password, 8)
        req.body.password = passwordHash

        userModel.updateOne({ _id }, req.body)
            .then(user => res.status(200).json({
                user
            }))
            .catch(next)
    },

    handleRestore: (req, res, next) => {
        const _id = req.params.id
        if (!_id)
            return res.status(500).json({
                errMessage: 'Vui lòng điền đầy đủ thông tin.'
            })

        userModel.restore({ _id })
            .then(user => res.status(200).json({
                user
            }))
            .catch(next)
    },

    handleDelete: (req, res, next) => {
        const _id = req.params.id
        if (!_id)
            return res.status(500).json({
                errMessage: 'Vui lòng điền đầy đủ thông tin.'
            })

        userModel.delete({ _id })
            .then(user => res.status(200).json({
                user
            }))
            .catch(next)
    },

    handleDeleteForce: (req, res, next) => {
        const _id = req.params.id
        if (!_id)
            return res.status(500).json({
                errMessage: 'Vui lòng điền đầy đủ thông tin.'
            })

        userModel.deleteOne({ _id })
            .then(user => res.status(200).json({
                user
            }))
            .catch(next)
    }
}

module.exports = userController