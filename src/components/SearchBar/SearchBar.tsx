import { FC, KeyboardEvent, useEffect, useState } from 'react'
import './SearchBar.sass'
import { Input } from '../UI/Input/Input'
import { Select } from '../UI/Select/Select'
import { useAppDispatch } from '../../store/store'
import { getBooks } from '../../store/actions/bookActions'

export const SearchBar: FC = () => {
  const dispatch = useAppDispatch()
  const [searchInput, setSearchInput] = useState('')
  const [category, setCategory] = useState<{ value: string }>({ value: 'all' })
  const [orderBy, setOrderBy] = useState<{ value: string }>({ value: 'relevance' })
  const categoryOptions = [
    { value: 'all' },
    { value: 'art' },
    { value: 'biography' },
    { value: 'computers' },
    { value: 'history' },
    { value: 'medical' },
    { value: 'poetry' }
  ]
  const orderOptions = [{ value: 'relevance' }, { value: 'newest' }]

  const handleSearch = (event?: KeyboardEvent<HTMLInputElement>) => {
    if (!searchInput) return
    if ((event && event.key === 'Enter') || !event) {
      dispatch(getBooks(searchInput, category.value, orderBy.value))
    }
  }

  useEffect(() => {
    if (searchInput) {
      dispatch(getBooks(searchInput, category.value, orderBy.value))
    }
  }, [category, orderBy, dispatch])


  return (
    <div className="search-bar">
      <div className="content">
        <h1 className="title">Search for books</h1>

        <Input className="w-100"
               endAdornment={<i className="bi bi-search" onClick={() => handleSearch()}/>}
               placeholder="Search..."
               value={searchInput}
               onChange={e => setSearchInput(e.target.value)}
               onKeyDown={handleSearch}
        />
        <div className="select-inputs">
          <div className="select-input-wrap">
            <p className="select-input-label">Categories</p>
            <Select value={category} setValue={setCategory} options={categoryOptions}/>
          </div>
          <div className="select-input-wrap">
            <p className="select-input-label">Sorting by</p>
            <Select value={orderBy} setValue={setOrderBy} options={orderOptions}/>
          </div>
        </div>

      </div>
    </div>
  )
}
