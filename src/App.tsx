import React from 'react'
import { SearchBar } from './components/SearchBar/SearchBar'
import { BookList } from './components/Book/BookList/BookList'
import { Route, Routes } from 'react-router-dom'
import { BookPage } from './components/Book/BookPage/BookPage'

function App() {
  return (
    <>
      <SearchBar/>
      <Routes>
        <Route path="/" element={<BookList/>}/>
        <Route path="/:id" element={<BookPage/>}/>
      </Routes>
    </>
  )
}

export default App
