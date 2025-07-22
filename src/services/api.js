import axios from "axios"
import { startLoading, stopLoading } from '../stores/loadingStore'

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL
})

let activeRequests = 0

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token")
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    activeRequests++
    startLoading()

    return config
  },
  (error) => {
    activeRequests--
    if (activeRequests <= 0) stopLoading()
    return Promise.reject(error)
  }
)

api.interceptors.response.use(
  (response) => {
    activeRequests--
    if (activeRequests <= 0) stopLoading()
    return response
  },
  (error) => {
    activeRequests--
    if (activeRequests <= 0) stopLoading()
    return Promise.reject(error)
  }
)

export default api
