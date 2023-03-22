import { FC } from 'react'
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

  return (
    <div className={`select-wrapper ${className}`} data-bs-toggle="dropdown" data-bs-auto-close="true">
      <p className={`select-value ${!value && 'text-muted opacity-50'}`}>
        {value?.label || value?.value || placeholder}
      </p>
      <i className="bi"/>
      <ul className="dropdown-menu overflow-scroll mt-2">
        {options.map(option => (
          <p
            key={option.value}
            className={`dropdown-item m-0 py-2 ${option.value === value?.value ? 'active' : ''}`}
            onClick={() => setValue(option)}>
            {option.label || option.value}
          </p>
        ))}
      </ul>
    </div>

  )
}
