import { Book } from '../../types/bookTypes'


export const dtoBooks = (data: { items: { volumeInfo: any, id: string }[], totalItems: number }) => {
  if (data.totalItems === 0 || !data.items[0].volumeInfo) return { books: [], totalItems: 0 }
  const books = data.items.map(item => ({
      id: item.id,
      title: item.volumeInfo.title,
      authors: item.volumeInfo.authors,
      categories: item.volumeInfo.categories,
      description: item.volumeInfo.description,
      language: item.volumeInfo.language,
      pageCount: item.volumeInfo.pageCount,
      imageUrl: item.volumeInfo.imageLinks?.thumbnail,
      publishedDate: item.volumeInfo.publishedDate
    }
  ) as Book)
  return { books, totalItems: data.totalItems }
}

export const dtoBook = (item: { volumeInfo: any, id: string }): Book => {
  return {
    id: item.id,
    title: item.volumeInfo.title,
    authors: item.volumeInfo.authors,
    categories: item.volumeInfo.categories,
    description: item.volumeInfo.description,
    language: item.volumeInfo.language,
    pageCount: item.volumeInfo.pageCount,
    imageUrl: item.volumeInfo.imageLinks?.medium,
    publishedDate: item.volumeInfo.publishedDate,
    subtitle: item.volumeInfo.subtitle
  }
}
