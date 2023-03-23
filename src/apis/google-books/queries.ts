import axios from './axios'
import { Book } from '../../types/bookTypes'
import { AxiosRequestConfig } from 'axios'
import { dtoBook, dtoBooks } from './dto'

type GetBooksProps = { query: string, category: string, orderBy: string, startIndex: number, maxResults?: number }
export const getBooksQuery = async (props: GetBooksProps): Promise<{ books: Book[], totalItems: number }> => {
  const params: AxiosRequestConfig['params'] = {
    q: `${props.query}${props.category === 'all' ? '' : `+subject:${props.category}`}`,
    orderBy: props.orderBy,
    startIndex: props.startIndex
    // maxResults: 5
  }
  const data = (await axios.get('volumes', { params })).data
  return dtoBooks(data)
}

export const getBookQuery = async (id: string) => {
  const data = (await axios.get(`volumes/${id}`)).data
  return dtoBook(data)
}
