import axios from './axios'
import { AxiosRequestConfig } from 'axios'
import { dtoBook, dtoBooks } from './dto'
import { PAGINATION_SIZE } from '../../constants'

type GetBooksProps = { query: string, category: string, orderBy: string, startIndex: number }
export const getBooksQuery = async (props: GetBooksProps) => {
  const params: AxiosRequestConfig['params'] = {
    q: `${props.query}${props.category === 'all' ? '' : `+subject:${props.category}`}`,
    orderBy: props.orderBy,
    startIndex: props.startIndex
  }
  const data = (await axios.get('volumes', { params })).data
  const books = dtoBooks(data)
  let hasMore = books.length === PAGINATION_SIZE
  return { books, hasMore, totalItems: data.totalItems }
}

export const getBookQuery = async (id: string) => {
  const data = (await axios.get(`volumes/${id}`)).data
  return dtoBook(data)
}
