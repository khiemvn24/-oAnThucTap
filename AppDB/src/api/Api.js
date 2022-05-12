import axios from 'axios'

export default axios.create({
    baseURL: 'http://192.168.5.11:5000/vnkfood/api'
    // baseURL: 'http://192.168.107.58:5000/vnkfood/api'
})