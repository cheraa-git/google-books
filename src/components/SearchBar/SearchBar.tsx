import { FC, KeyboardEvent, useEffect } from 'react'
import './SearchBar.sass'
import { Input } from '../UI/Input/Input'
import { Select } from '../UI/Select/Select'
import { RootState, useAppDispatch, useAppSelector } from '../../store/store'
import { getBooks } from '../../store/actions/bookActions'
import { clearBooks, setCategory, setOrderBy, setQuery } from '../../store/slices/bookSlice'

export const SearchBar: FC = () => {
  const dispatch = useAppDispatch()
  const { category, orderBy, orderOptions, categories, books, query } = useAppSelector((state: RootState) => state.book)

  const handleSearch = (event?: KeyboardEvent<HTMLInputElement>) => {
    if (!query) return
    if ((event && event.key === 'Enter') || !event) {
      dispatch(clearBooks())
      dispatch(getBooks())
    }
  }

  useEffect(() => {
    if (query) {
      dispatch(clearBooks())
      dispatch(getBooks())
    }
  }, [category, orderBy, dispatch])


  return (
    <div className="search-bar">
      <div className="content">
        <h1 className="title">Search for books {books.length}</h1>
        <Input className="w-100"
               endAdornment={<i className="bi bi-search" onClick={() => handleSearch()}/>}
               placeholder="Search..."
               value={query}
               onChange={e => dispatch(setQuery(e.target.value))}
               onKeyDown={handleSearch}
        />
        <div className="select-inputs">
          <div className="select-input-wrap">
            <p className="select-input-label">Categories</p>
            <Select value={{ value: category }} setValue={data => dispatch(setCategory(data.value))}
                    options={categories}/>
          </div>
          <div className="select-input-wrap">
            <p className="select-input-label">Sorting by</p>
            <Select value={{ value: orderBy }} setValue={data => dispatch(setOrderBy(data.value))}
                    options={orderOptions}/>
          </div>
        </div>
      </div>
    </div>
  )
}
