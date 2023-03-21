import { FC, useState } from 'react'
import './SearchBar.sass'
import { Input } from '../UI/Input/Input'
import { Select } from '../UI/Select/Select'

export const SearchBar: FC = () => {
  const [category, setCategory] = useState<{ value: string, label?: string } | null>(null)
  const options = [
    { value: 'op1', label: 'Option 1 asdf asd fasdf asd asdfasd' },
    { value: 'op2', label: 'Option 2' },
    { value: 'op3', label: 'Option 3' },
    { value: 'op4', label: 'Option 4' },
    { value: 'op5', label: 'Option 5' },
    { value: 'op6' },
    { value: 'op7' },
    { value: 'op8' },
    { value: 'op9', label: 'Option 1' },
    { value: 'op10', label: 'Option 2' },
    { value: 'op11', label: 'Option 3' },
    { value: 'op12', label: 'Option 4' },
    { value: 'op13', label: 'Option 5' },
    { value: 'op14' },
    { value: 'op15' },
    { value: 'op16' }
  ]

  return (
    <div className="search-bar">
      <div className="content">
        <h1 className="title">Search for books</h1>
        <Input className="w-100" endAdornment={<i className="bi bi-search"/>} placeholder="Search..."/>
        <div className="select-inputs">
          <Select className="mt-4" value={category} setValue={setCategory} options={options} placeholder="Select a category..."/>
          <Select className="mt-4" value={category} setValue={setCategory} options={options} placeholder="Sorting by..."/>
        </div>

      </div>
    </div>
  )
}
