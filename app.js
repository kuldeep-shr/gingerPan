const express = require('express')
const bodyParser = require('body-parser')
const Routes = require('./src/routes/index')
const cors = require('cors')

// create our Express app
const app = express()

// Takes the raw requests and turns them into usable properties on req.body
app.use(cors())
app.use(bodyParser.json())
//app.use(bodyParser)
app.use(bodyParser.urlencoded({ extended: true }))

// After allllll that above middleware, we finally handle our own routes!
app.use('/api/v1',Routes)
// app.use(errorHandlers.notFound)

// done! we export it so we can start the site in start.js
module.exports = app