const app = require('./app')
const config = require('./utils/config')

app.listen(config.PORT, () => {
    console.log(`Listening on ${config.PORT}`)
    console.log(`Visit http://localhost:${config.PORT}/\n`)
})
