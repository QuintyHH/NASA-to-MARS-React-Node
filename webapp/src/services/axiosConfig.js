import axios from 'axios'
// const BASE_URL = '35.177.84.34'
const BASE_URL = 'http://localhost:54210'

const instance = axios.create({
  baseURL: BASE_URL + '/api',
  responseType: 'json',
})

instance.interceptors.request.use((request) => {
  if (request.url.includes(BASE_URL)) {
    request.withCredentials = false
    request.baseURL = BASE_URL
  }
  return request
})

instance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default instance
