const express = require('express')
const router = express.Router()

const { roomController } = require('../controllers')
 

const roomRoute = app => {
    router.get('/read', roomController.handleRead)
    router.get('/read/:id', roomController.handleReadOne)
    router.post('/create', roomController.handleCreate)
    router.put('/update/:id', roomController.handleUpdate)
    router.delete('/delete/:id', roomController.handleDelete)

    return app.use('/api/room', router)
}

module.exports = roomRoute