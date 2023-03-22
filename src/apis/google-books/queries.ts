import axios from './axios'
import { Book } from '../../types/bookTypes'
import { AxiosRequestConfig } from 'axios'

type GetBooksParams = { query: string, category: string, orderBy: string, startIndex?: number }
export const getBooksQuery = async (data: GetBooksParams): Promise<{ books: Book[], totalItems: number }> => {
  const params: AxiosRequestConfig['params'] = {
    q: `${data.query}${data.category === 'all' ? '' : `+subject:${data.category}`}`,
    orderBy: data.orderBy
  }
  const response = await axios.get('volumes', { params })
  console.log(response.data)
  const books: Book[] = response.data.items.map((item: any) => ({
    id: item.id,
    title: item.volumeInfo.title,
    authors: item.volumeInfo.authors,
    categories: item.volumeInfo.categories,
    description: item.volumeInfo.description,
    language: item.volumeInfo.language,
    pageCount: item.volumeInfo.pageCount,
    imageUrl: item.volumeInfo?.imageLinks?.thumbnail,
    publishedDate: item.volumeInfo.publishedDate
  }) as Book)
  return { books, totalItems: response.data.totalItems }
}
