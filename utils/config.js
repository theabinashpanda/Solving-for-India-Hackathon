/* eslint-disable no-undef */
require('dotenv').config()
const PORT = process.env.PORT || 3001
const BUCKET = process.env.BUCKET
const PROJECT_ID = process.env.PROJECT_ID
const BASE_PATH = process.cwd()
module.exports = { PORT, BUCKET, PROJECT_ID, BASE_PATH }