const plantsRouter = require('express').Router()
const store = require('./store')
const config = require('../utils/config')
const predict = require('../utils/ai')
const fs = require('fs')
const util = require('util')

plantsRouter.post('/', async (request, response) => {
    console.log('\nreceived a post request:-')
    const imageURL = await store(request.files)
    console.log('URL:', imageURL)
    const imagePath = config.BASE_PATH + '/' + request.files.file.tempFilePath
    const result = await predict(imagePath)
    console.log('Prediction:', result)
    try {
        await util.promisify(fs.unlink)(imagePath)
        console.log('deleted temp image')
    }
    catch (e) {
        console.log('could not delete temp image')
    }
    response.status(200).json({ prediction: result })
    console.log('sent response\n')
})

module.exports = plantsRouter