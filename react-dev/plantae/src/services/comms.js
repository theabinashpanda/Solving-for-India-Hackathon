import axios from 'axios'

const baseUrl = '/api/plants'

const sendFile = (file) => {
    const data = new FormData()
    data.append('file', file)

    return axios
        .post(baseUrl, data)
        .then(res => {
            console.log('Response:', res.data)
            return res.data
        })
}

export default { sendFile }