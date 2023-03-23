import { FC } from 'react'
import { RootState, useAppDispatch, useAppSelector } from '../../../store/store'
import { BookCard } from '../BookCard/BookCard'
import { Loader } from '../../UI/Loader/Loader'
import { getBooks } from '../../../store/actions/bookActions'
import './BookList.sass'
import { Book } from '../../../types/bookTypes'

export const BookList: FC = () => {
  const dispatch = useAppDispatch()
  const { books, loading, totalItems, hasMore } = useAppSelector((state: RootState) => state.book)

  const filterDuplicateBooks = (books: Book[]) => {
    return books.reduce((acc, book) => {
      if (!acc.find(b => b.id === book.id)) acc.push(book)
      return acc
    }, [] as Book[])
  }

  const filteredBooks = filterDuplicateBooks(books)

  return (
    <div>
      <p className="total-items">{totalItems ? `Found ${totalItems} results` : 'Books not found'}</p>
      <div className="books-wrap">
        {filteredBooks.map(book => <BookCard key={book.id} book={book}/>)}
      </div>

      {loading && <div className="loader-wrap"><Loader/></div>}
      {
        books.length > 0 && hasMore && !loading &&
        <button className="load-more-btn" onClick={() => dispatch(getBooks())}>load more...</button>
      }
    </div>
  )
}
