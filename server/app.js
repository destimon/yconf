const path = require('path')
const history = require('connect-history-api-fallback')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const api = require('./routes/api')

const PORT = 8080

const publicPath = path.resolve(__dirname, '../../dist')
const staticConf = { maxAge: '1y', etag: false }

app.use(bodyParser.json())
app.use('/api', api)

app.use(express.static(publicPath, staticConf))

app.use('/', history())

app.listen(PORT, () => console.log(`App running on port ${PORT}!`))