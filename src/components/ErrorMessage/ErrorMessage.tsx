import { FC, useEffect } from 'react'
import './ErrorMessage.sass'

interface ErrorMessageProps {
  message: string
  setMessage: (message: string) => void
}

export const ErrorMessage: FC<ErrorMessageProps> = ({ setMessage, message }) => {

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setMessage('')
      }, 3000)
    }
  }, [message, setMessage])

  return (
    <>
      {message &&
        <div className="error-message">
          <p>{message}</p>
        </div>}
    </>
  )
}
