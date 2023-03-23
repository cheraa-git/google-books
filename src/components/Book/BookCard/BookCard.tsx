import { FC } from 'react'
import { Book } from '../../../types/bookTypes'
import './BookCard.sass'
import { useNavigate } from 'react-router-dom'

export const BookCard: FC<{ book: Book }> = ({ book }) => {
  const navigate = useNavigate()
  return (
    <div className="book-card" onClick={() => navigate(`/${book.id}`)}>
      <div>
        {book.imageUrl && <img className="card-img" src={book.imageUrl} alt="book-preview"/>}
      </div>
      <div>
        <p className="card-category">{book.categories && book.categories[0]}</p>
        <p className="fw-bold mb-0">{book.title}</p>
        <p className="opacity-25 mb-0">{book.authors?.join(', ')}</p>
        <p className="card-lang">{book.language}</p>
      </div>
    </div>
  )
}
