// for now, it stores the images in /images/tmp
const fs = require('fs')
const config = require('../utils/config')
const util = require('util')
const { v4: uuid } = require('uuid')
const basePath = config.BASE_PATH + '/images/tmp/'

const store = (file) => {
    const newName = `${basePath}${uuid()}.${file.image.name.split('.').at(-1)}`
    const rename = util.promisify(fs.rename)
    return rename(file.image.tempFilePath, newName)
        .then(() => { return newName })

}

module.exports = { store }