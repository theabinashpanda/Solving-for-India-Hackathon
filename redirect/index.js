const express = require('express')
const app = express()
PORT=process.env.PORT || 8000

app.get('/', (req, res) => {
    res.redirect('http://34.93.173.50:8080/')
})

app.listen(PORT, (req, res) => {
    console.log(`listening on ${PORT}\n`)
})