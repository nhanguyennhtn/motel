const express = require('express')
const router = express.Router()

const { userController } = require('../controllers')
 

const userRoute = app => {
    router.post('/register', userController.handleRegister)
    router.post('/login', userController.handleLogin)
    router.get('/read', userController.handleRead)
    router.get('/profile/:id', userController.handleReadOne)
    router.get('/trash', userController.handleTrash)
    router.put('/update/:id', userController.handleUpdate)
    router.patch('/restore/:id', userController.handleRestore)
    router.delete('/delete/:id', userController.handleDelete)
    router.delete('/delete/force/:id', userController.handleDeleteForce)

    return app.use('/api/user', router)
}

module.exports = userRoute