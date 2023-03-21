import { FC, InputHTMLAttributes, ReactNode, useState } from 'react'
import './Input.sass'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  endAdornment?: ReactNode
}

export const Input: FC<InputProps> = ({ className, endAdornment, ...props }) => {
  const [isFocused, setIsFocused] = useState(false)
  return (
    <div className={`input-wrapper ${isFocused ? 'active' : ''}`}>
      <input
        className={`input ${className}`}
        type="text"
        {...props}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {endAdornment && <div className="action-btn">{endAdornment}</div>}


    </div>
  )
}

