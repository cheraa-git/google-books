import { AppDispatch } from '../store'
import { setBooks, setLoading } from '../slices/bookSlice'
import { getBooksQuery } from '../../apis/google-books/queries'

export const getBooks = (query: string, category: string, orderBy: string) => async (dispatch: AppDispatch) => {
  dispatch(setLoading(true))
  const response = await getBooksQuery({ query, category, orderBy })
  console.log(response)
  dispatch(setBooks(response))
  dispatch(setLoading(false))
}
