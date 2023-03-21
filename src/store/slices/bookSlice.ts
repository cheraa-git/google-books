import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Book } from '../../types/bookTypes'

export interface BookState {
  loading: boolean
  books: Book[]
  totalItems: number | null
}

const initialState: BookState = {
  loading: false,
  books: [],
  totalItems: null
}

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload
    },
    setBooks: (state, { payload }: PayloadAction<{ books: Book[], totalItems: number }>) => {
      state.books = payload.books
      state.totalItems = payload.totalItems
    }
  }
})

export const { setLoading, setBooks } = bookSlice.actions

export const BookReducer = bookSlice.reducer
