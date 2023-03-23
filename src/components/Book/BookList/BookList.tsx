import { FC } from 'react'
import { RootState, useAppDispatch, useAppSelector } from '../../../store/store'
import { BookCard } from '../BookCard/BookCard'
import { Loader } from '../../UI/Loader/Loader'
import { getBooks } from '../../../store/actions/bookActions'
import './BookList.sass'
import { PAGINATION_SIZE } from '../../../constants'

export const BookList: FC = () => {
  const dispatch = useAppDispatch()
  const { books, loading, totalItems, hasMore } = useAppSelector((state: RootState) => state.book)

  return (
    <div>
      {totalItems && <p className="total-items">Found {totalItems} results</p>}

      <div className="books-wrap">
        {books.map(book => <BookCard key={book.id} book={book}/>)}
      </div>

      {loading && <div className="loader-wrap"><Loader/></div>}
      {
        books.length >= PAGINATION_SIZE && hasMore && !loading &&
        <button className="load-more-btn" onClick={() => dispatch(getBooks())}>load more...</button>
      }
    </div>
  )
}
