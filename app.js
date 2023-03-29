const express = require('express')
const leavesRouter = require('./controllers/leaves')
const fileUpload = require('express-fileupload')

const app = express()

app.use(fileUpload({ useTempFiles: true, tempFileDir: './images/tmp/' }))
app.use(express.static('build'))
app.use('/api/leaves', leavesRouter)

module.exports = app