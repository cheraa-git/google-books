import { AppDispatch, GetState } from '../store'
import { addBooks, setBook, setHasMore, setLoading, setTotalItems } from '../slices/bookSlice'
import { getBookQuery, getBooksQuery } from '../../apis/google-books/queries'

export const getBooks = () => {
  return async (dispatch: AppDispatch, getState: GetState) => {
    const { category, orderBy, books, query } = getState().book
    const startIndex = books.length
    dispatch(setLoading(true))
    const response = await getBooksQuery({ query, category, orderBy, startIndex })
    if (!response.hasMore) dispatch(setHasMore(false))
    dispatch(addBooks(response.books))
    if (startIndex === 0) dispatch(setTotalItems(response.totalItems))
    dispatch(setLoading(false))
  }
}

export const getBook = (id: string) => async (dispatch: AppDispatch) => {
  dispatch(setLoading(true))
  const response = await getBookQuery(id)
  dispatch(setBook(response))
  dispatch(setLoading(false))
}
