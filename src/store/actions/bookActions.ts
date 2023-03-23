import { AppDispatch, GetState } from '../store'
import { addBooks, setHasMore, setLoading, setTotalItems } from '../slices/bookSlice'
import { getBooksQuery } from '../../apis/google-books/queries'
import { PAGINATION_SIZE } from '../../constants'

export const getBooks = () => {
  return async (dispatch: AppDispatch, getState: GetState) => {
    const { category, orderBy, books, query } = getState().book
    const startIndex = books.length
    dispatch(setLoading(true))
    const response = await getBooksQuery({ query, category, orderBy, startIndex })
    if (response.books.length < PAGINATION_SIZE) dispatch(setHasMore(false))
    dispatch(addBooks(response.books))
    if (startIndex === 0) dispatch(setTotalItems(response.totalItems))
    dispatch(setLoading(false))
  }
}
