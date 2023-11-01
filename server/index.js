const express = require('express')
const connectDB = require('./config')
const route = require('./routes')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

connectDB()

app.use(bodyParser.json({ limit: "50mb" }))
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }))


app.use(cors())
route(app)

app.listen(5000, () => {
    console.log(`Server's listening at http://localhost:5000`);
})