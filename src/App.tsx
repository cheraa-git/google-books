import React from 'react'
import { SearchBar } from './components/SearchBar/SearchBar'
import { BookList } from './components/Book/BookList/BookList'
import { Route, Routes } from 'react-router-dom'
import { BookPage } from './components/Book/BookPage/BookPage'
import { RootState, useAppDispatch, useAppSelector } from './store/store'
import { ErrorMessage } from './components/ErrorMessage/ErrorMessage'
import { setErrorMessage } from './store/slices/bookSlice'

function App() {
  const dispatch = useAppDispatch()
  const bookErrorMessage = useAppSelector((state: RootState) => state.book.errorMessage)
  return (
    <>
      <ErrorMessage message={bookErrorMessage} setMessage={(message) => dispatch(setErrorMessage(message))}/>
      <SearchBar/>
      <Routes>
        <Route path="/" element={<BookList/>}/>
        <Route path="/:id" element={<BookPage/>}/>
      </Routes>
    </>
  )
}

export default App
