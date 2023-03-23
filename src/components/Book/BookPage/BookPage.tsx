import { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { RootState, useAppDispatch, useAppSelector } from '../../../store/store'
import './BookPage.sass'
import { getBook } from '../../../store/actions/bookActions'
import { Loader } from '../../UI/Loader/Loader'

export const BookPage: FC = () => {
  const dispatch = useAppDispatch()
  const { id } = useParams<{ id: string }>()
  const { book, loading } = useAppSelector((state: RootState) => state.book)

  useEffect(() => {
    if (id) dispatch(getBook(id))
  }, [id, dispatch])

  if (loading) return <div className="text-center mt-5"><Loader/></div>
  return (
    <div className="book-page">
      <div className="page-preview">
        {book?.imageUrl && <img src={book?.imageUrl} alt="preview"/>}
      </div>
      <div className="page-content">
        <div className="d-flex justify-content-between flex-wrap">
          <div className="opacity-50 mb-4">
            {book?.categories?.map((category, i) => <p key={i} className="mb-0">{category}</p>)}
          </div>
          <p className="opacity-50 small">{book?.publishedDate}</p>
        </div>
        <h3>{book?.title} {book?.publishedDate ? `(${book.language})` : ''}</h3>
        <h4>{book?.subtitle}</h4>
        <p className="opacity-25 text-decoration-underline">{book?.authors?.join(', ')}</p>
        <p>{book?.description}</p>
        {book?.pageCount ? <p>{book.pageCount} pages</p> : ''}
      </div>
    </div>
  )
}
