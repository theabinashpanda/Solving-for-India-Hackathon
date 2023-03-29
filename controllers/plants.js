const plantsRouter = require('express').Router()
const { store } = require('./store')
const predict = require('../utils/ai')

plantsRouter.post('/', async (request, response) => {
    const imagePath = await store(request.files)
    console.log('Path:', imagePath)
    const result = await predict(imagePath)
    console.log('Prediction:', result)
    response.status(200).json({ prediction: result })
})

module.exports = plantsRouter