const fs = require('fs')
const { v4: uuid } = require('uuid')
const { Storage } = require('@google-cloud/storage')
const util = require('util')
const path = require('path')
// eslint-disable-next-line no-undef
const serviceKey = path.join(__dirname, './plantae-382703-62ab865548c8.json')

const bucketName = 'recvd_images'

const storage = new Storage({
    keyFilename: serviceKey,
    projectId: 'plantae-382703'
})

const bucket = storage.bucket(bucketName)

const store = async (file) => {
    const readStream = await util.promisify(fs.readFile)(file.file.tempFilePath)
    const newName = `${uuid()}.${file.file.name.split('.').pop()}`

    const blob = bucket.file(newName.replace(/ /g, '_'))

    return new Promise((res, rej) => {
        const blobStream = blob.createWriteStream({
            resumable: false
        })
        blobStream
            .on('finish', () => {
                const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`
                console.log('finished uploading')
                res(publicUrl)
            })
            .on('error', (e) => {
                console.log('error:', e.message)
                rej('something went wrong')
            })
            .end(readStream)
    }).catch((e) => console.error(e))
}

module.exports = { store }