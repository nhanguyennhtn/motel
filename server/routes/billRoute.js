const express = require('express')
const router = express.Router()

const { billController } = require('../controllers')


const billRoute = app => {
    router.get('/read', billController.handleRead)
    router.post('/create', billController.handleCreate)
    router.delete('/delete/:id', billController.handleDelete)

    return app.use('/api/bill', router)
}

module.exports = billRoute