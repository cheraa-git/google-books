import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { RootState, useAppSelector } from '../../../store/store'
import './BookPage.sass'

export const BookPage: FC = () => {
  const { id } = useParams<{ id: string }>()
  const books = useAppSelector((state: RootState) => state.book.books)
  const book = books.find(b => b.id === id)


  return (
    <div className="book-page">
      <div className="page-preview">
        {book?.imageUrl && <img src={book?.imageUrl} alt="preview"/>}
      </div>
      <div className="page-content">
        <div className="d-flex justify-content-between">
          <p className="opacity-50 mb-4">{book?.categories?.join(' / ')}</p>
          <p className="opacity-50 small">{book?.publishedDate}</p>
        </div>
        <h3>
          {book?.title}
          {book?.publishedDate ? ` (${book.language})` : ''}
        </h3>
        <p className="opacity-25 text-decoration-underline">{book?.authors?.join(', ')}</p>
        <p>{book?.description}</p>
        {book?.pageCount ? <p>{book.pageCount} pages</p> : ''}
      </div>
    </div>
  )
}
