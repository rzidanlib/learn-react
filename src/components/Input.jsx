import { useEffect, useRef } from 'react'

export default function Input({ isFocused = false, type = 'text', ...props }) {
  const inputRef = useRef(null)

  useEffect(() => {
    if (isFocused) {
      inputRef.current.focus()
    }
  }, [])
  return (
    <input
      ref={inputRef}
      {...props}
      type={type}
      className={
        'transition duration-300 w-full focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-200 border-slate-300 shadow-sm rounded-lg'
      }
    />
  )
}
