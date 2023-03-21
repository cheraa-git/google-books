import axios from './axios'
import { Book } from '../../types/bookTypes'

type GetBooksParams = { query: string, category?: string, orderBy?: string }
export const getBooksQuery = async (data: GetBooksParams): Promise<{ books: Book[], totalItems: number }> => {
  const response = await axios.get(`volumes?q=${data.query}`)
  console.log(response.data)
  const books: Book[] = response.data.items.map((item: any) => ({
    id: item.id,
    title: item.volumeInfo.title,
    authors: item.volumeInfo,
    categories: item.volumeInfo.categories,
    description: item.volumeInfo.description,
    language: item.volumeInfo.language,
    pageCount: item.volumeInfo.pageCount,
    imageUrl: item.volumeInfo.imageLinks.thumbnail,
    publishedDate: item.volumeInfo.publishedDate
  }) as Book)
  return { books, totalItems: response.data.totalItems }
}
