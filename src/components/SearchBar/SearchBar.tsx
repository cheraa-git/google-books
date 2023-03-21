import { FC, useState } from 'react'
import './SearchBar.sass'
import { Input } from '../UI/Input/Input'
import { Select } from '../UI/Select/Select'
import { useAppDispatch } from '../../store/store'
import { getBooks } from '../../store/actions/bookActions'

export const SearchBar: FC = () => {
  const dispatch = useAppDispatch()
  const [category, setCategory] = useState<{ value: string, label?: string } | null>(null)
  const [orderBy, setOrderBy] = useState<{ value: string, label?: string } | null>(null)
  const categoryOptions = [
    { value: 'art' }, { value: 'biography' }, { value: 'computers' }, { value: 'history' }, { value: 'medical' }, { value: 'poetry' }
  ]
  const orderOptions = [{ value: 'relevance' }, { value: 'newest' }]

  const handleSearch = () => {
    dispatch(getBooks())
  }

  return (
    <div className="search-bar">
      <div className="content">
        <h1 className="title">Search for books</h1>
        <Input className="w-100" endAdornment={<i className="bi bi-search" onClick={handleSearch}/>}
               placeholder="Search..."/>
        <div className="select-inputs">
          <Select className="mt-4" value={category} setValue={setCategory} options={categoryOptions}
                  placeholder="Select a category..."/>
          <Select className="mt-4" value={orderBy} setValue={setOrderBy} options={orderOptions}
                  placeholder="Sorting by..."/>
        </div>

      </div>
    </div>
  )
}
