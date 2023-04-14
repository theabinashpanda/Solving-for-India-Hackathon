/* eslint-disable no-unused-vars */
const config = require('./config')
const util = require('util')
const exec = util.promisify(require('child_process').exec)

const aiPath = config.BASE_PATH + '/ai-model/'

const predict = (imagePath) => {
    return exec(`python3 ${aiPath}predict.py ${imagePath} ${aiPath}`).then(({ stdout }) => {
        return stdout.trimEnd()
    })
}

module.exports = predict