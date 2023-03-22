import { FC, useState } from 'react'
import './Select.sass'

type Option = { value: string, label?: string }

interface SelectProps {
  options: Option[]
  value: Option
  setValue: (value: Option) => void
  placeholder?: string
  className?: string
}

export const Select: FC<SelectProps> = ({ options, value, setValue, placeholder, className }) => {
  const [isFocused, setIsFocused] = useState(false)

  const handleOptionClick = (option: Option) => {
    setValue(option)
    setIsFocused(false)
  }

  // const handleClearSelect = () => {
  //   setValue(null)
  //   setIsFocused(false)
  // }


  return (
    <div className={`select-wrapper ${isFocused ? 'active' : ''} ${className}`}>
      <div className="w-100" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
        <div className="select-content" onClick={() => setIsFocused(prev => !prev)}>
          <input onBlur={() => setIsFocused(false)}/>
          <p
            className={`select-value ${!value && 'text-muted opacity-50'}`}>{value?.label || value?.value || placeholder}</p>

        </div>
        <div className="dropdown">
          <ul className="dropdown-menu overflow-scroll mt-2">
            {options.map(option => (
              <p
                key={option.value}
                className={`dropdown-item m-0 py-2 ${option.value === value?.value ? 'active' : ''}`}
                onClick={() => handleOptionClick(option)}>
                {option.label || option.value}
              </p>
            ))}
          </ul>
        </div>
      </div>
      <div className="select-controls">
        {isFocused ? <i className="bi bi-chevron-up"/> : <i className="bi bi-chevron-down"/>}
        {/*{value && <i className="bi bi-x-lg close-btn" onClick={handleClearSelect}/>}*/}
      </div>
    </div>

  )
}
