import { createSlice } from "@reduxjs/toolkit"

export interface BookState {
}

const initialState: BookState = {
}

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
  }
})

export const { } = bookSlice.actions

export const BookReducer = bookSlice.reducer
