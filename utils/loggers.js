const info = (...params) => {
    console.log(params)
}

const error = (...errors) => {
    console.log(errors)
}

module.exports = { info, error }