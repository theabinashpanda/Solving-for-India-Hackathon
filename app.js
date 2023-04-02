const express = require('express')
const plantsRouter = require('./controllers/plants')
const fileUpload = require('express-fileupload')
const cors = require('cors')

const app = express()

app.use(fileUpload({ useTempFiles: true, tempFileDir: './images/tmp/' }))
app.use(express.static('build'))
app.use(cors())
app.use('/api/plants', plantsRouter)

module.exports = app