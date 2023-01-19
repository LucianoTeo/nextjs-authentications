import axios from 'axios'

const apiUrl = axios.create({
  baseURL: 'http://localhost:3333'
})

export { apiUrl}