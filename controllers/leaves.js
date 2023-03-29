const leavesRouter = require('express').Router()
const { store } = require('./store')

leavesRouter.post('/', (request, response) => {
    store(request.files)
    response.status(200).end()
})

module.exports = leavesRouter