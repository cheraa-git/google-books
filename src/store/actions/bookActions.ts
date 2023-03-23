import { AppDispatch, GetState } from '../store'
import { addBooks, setBook, setErrorMessage, setHasMore, setLoading, setTotalItems } from '../slices/bookSlice'
import { getBookQuery, getBooksQuery } from '../../apis/google-books/queries'

export const getBooks = () => {
  return async (dispatch: AppDispatch, getState: GetState) => {
    const { category, orderBy, books, query } = getState().book
    const startIndex = books.length
    dispatch(setLoading(true))
    try {
      const response = await getBooksQuery({ query, category, orderBy, startIndex })
      if (!response.hasMore) dispatch(setHasMore(false))
      dispatch(addBooks(response.books))
      if (startIndex === 0) dispatch(setTotalItems(response.totalItems))
    } catch (e) {
      dispatch(setErrorMessage('Something went wrong...'))
    }
    dispatch(setLoading(false))
  }
}

export const getBook = (id: string) => async (dispatch: AppDispatch) => {
  dispatch(setLoading(true))
  try {
    const response = await getBookQuery(id)
    dispatch(setBook(response))
  } catch (e) {
    dispatch(setErrorMessage('Something went wrong...'))
  }
  dispatch(setLoading(false))
}
