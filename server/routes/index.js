const userRoute = require('./userRoute')
const roomRoute = require('./roomRoute')
const contactRoute = require('./contactRoute')
const routes = app => {
    userRoute(app),
    roomRoute(app),
    contactRoute(app)
}

module.exports = routes
