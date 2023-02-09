import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'http://localhost:80',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods' : '*',
        'Access-Control-Allow-Headers' : '*',
        'Content-type': 'application/json',
    },
    withCredentials: true,
})

export default axios
