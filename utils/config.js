/* eslint-disable no-undef */
require('dotenv').config()
const PORT = process.env.PORT || 3001
const BASE_PATH = process.cwd()

module.exports = { PORT, BASE_PATH }