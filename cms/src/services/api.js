import axios from 'axios'

const token = localStorage.getItem('token')

const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    Authorization: `Bearer ${token}`
  }
})

export default api