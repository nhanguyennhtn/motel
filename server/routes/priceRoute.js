const express = require('express')
const router = express.Router()

const { contactController } = require('../controllers')


const contactRoute = app => {
    router.get('/read', contactController.handleRead)
    router.post('/create', contactController.handleCreate)
    router.delete('/delete/:id', contactController.handleDelete)

    return app.use('/api/price', router)
}

module.exports = contactRoute