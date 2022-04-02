import axios from 'axios'

const service = axios.create({
    baseURL: "http://localhost:8081", // api的base_url
    timeout: 15000
})

export default service