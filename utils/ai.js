/* eslint-disable no-unused-vars */
const config = require('./config')
const util = require('util')
const exec = util.promisify(require('child_process').exec)

const aiPath = config.BASE_PATH + '/ai-model/'

const predict = (filePath) => {
    return exec(`python ${aiPath}dummy.py`).then(({ stdout }) => {
        return stdout
    })
}

module.exports = predict