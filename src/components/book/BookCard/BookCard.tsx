import { FC } from 'react'
import { Book } from '../../../types/bookTypes'
import './BookCard.sass'

export const BookCard: FC<{ book: Book }> = ({ book }) => {
  return (
    <div className="book-card">
      <img className="card-img" src={book.imageUrl} alt="book-preview"/>
      <p className="card-category">{book.categories && book.categories[0]}</p>
      <p className="fw-bold mb-0">{book.title}</p>
      <p className="opacity-25">{book.authors?.join(', ')}</p>
    </div>
  )
}
