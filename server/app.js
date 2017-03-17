var express = require('express')
var logger = require('morgan')
var bodyParser = require('body-parser')
var cors = require('cors')

var apis = require('./routes/api/index')

var app = express()
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.use('/api', apis)

module.exports = app
