const userRoute = require('./userRoute')
const roomRoute = require('./roomRoute')
const priceRoute = require('./priceRoute')
const contactRoute = require('./contactRoute')
const billRoute = require('./billRoute')
const routes = app => {
    userRoute(app),
    roomRoute(app),
    priceRoute(app),
    contactRoute(app),
    billRoute(app)
}

module.exports = routes
