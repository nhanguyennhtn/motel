const express = require('express')
const router = express.Router()

const { contactController } = require('../controllers')


const contactRoute = app => {
    router.get('/read', contactController.handleRead)
    router.post('/create', contactController.handleCreate)
    // router.put('/update/:id', contactController.handleUpdate)
    router.delete('/delete/:id', contactController.handleDelete)
    router.patch('/restore/:id', contactController.handleRestore)
    router.delete('/delete/force/:id', contactController.handleDeleteForce)

    return app.use('/api/contact', router)
}

module.exports = contactRoute