import axios from 'axios'

const axiosInstace = axios.create({
    baseURL : import.meta.env.VITE_PRODUCTION_BACKEND_BASEURL
})

export default axiosInstace

