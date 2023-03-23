import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Book } from '../../types/bookTypes'

export interface BookState {
  loading: boolean
  books: Book[]
  book?: Book
  totalItems: number | null
  category: string
  categories: { value: string }[]
  orderBy: string,
  orderOptions: { value: string }[]
  query: string,
  hasMore: boolean
  errorMessage: string
}

const initialState: BookState = {
  loading: false,
  books: [],
  totalItems: null,
  category: 'all',
  categories: [
    { value: 'all' },
    { value: 'art' },
    { value: 'biography' },
    { value: 'computers' },
    { value: 'history' },
    { value: 'medical' },
    { value: 'poetry' }
  ],
  orderBy: 'relevance',
  orderOptions: [{ value: 'relevance' }, { value: 'newest' }],
  query: '',
  hasMore: true,
  errorMessage: ''
}

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload
    },
    addBooks: (state, { payload }: PayloadAction<Book[]>) => {
      state.books.push(...payload)
    },
    setTotalItems: (state, { payload }: PayloadAction<number>) => {
      state.totalItems = payload
    },
    clearBooks: (state) => {
      state.books = []
      state.book = undefined
      state.totalItems = null
      state.hasMore = true
    },
    setCategory: (state, { payload }: PayloadAction<string>) => {
      state.category = payload
    },
    setOrderBy: (state, { payload }: PayloadAction<string>) => {
      state.orderBy = payload
    },
    setQuery: (state, { payload }: PayloadAction<string>) => {
      state.query = payload
    },
    setHasMore: (state, { payload }: PayloadAction<boolean>) => {
      state.hasMore = payload
    },
    setBook: (state, { payload }: PayloadAction<Book>) => {
      state.book = payload
    },
    setErrorMessage: (state, { payload }: PayloadAction<string>) => {
      state.errorMessage = payload
    }
  }
})

export const {
  setLoading,
  addBooks,
  setOrderBy,
  setCategory,
  clearBooks,
  setQuery,
  setHasMore,
  setTotalItems,
  setBook,
  setErrorMessage
} = bookSlice.actions

export const BookReducer = bookSlice.reducer
