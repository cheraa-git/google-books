import axios from 'axios'

export default axios.create({
  baseURL: 'https://www.googleapis.com/books/v1/',
  params: {
    key: process.env.REACT_APP_GOOGLE_API_KEY,
    maxResults: 30
  }
})
