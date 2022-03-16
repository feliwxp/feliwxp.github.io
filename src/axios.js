import axios from 'axios'

const getAPI = axios.create({
    baseURL: 'https://bloopbloop.pythonanywhere.com',
    timeout: 1000,
})

export {
    getAPI
}