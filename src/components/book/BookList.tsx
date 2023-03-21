import { FC } from 'react'
import { RootState, useAppSelector } from '../../store/store'
import { BookCard } from './BookCard/BookCard'
import { Loader } from '../UI/Loader/Loader'

export const BookList: FC = () => {
  const { books, loading, totalItems } = useAppSelector((state: RootState) => state.book)

  if (loading) return <div className="mx-auto w-max mt-5"><Loader/></div>
  return (
    <div>
      <p className="text-center mt-3 mb-4">Found {totalItems} results</p>
      <div className="d-flex flex-wrap justify-content-center mb-5">
        {books.map(book => <BookCard key={book.id} book={book}/>)}
      </div>
    </div>
  )
}
