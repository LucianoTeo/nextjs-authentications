import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  padding?: string
  children: React.ReactNode
}

function Button({ className, children, title, ...rest }: ButtonProps) {
  return (
    <button
      className={`px-4 py-2 bg-purple-900 rounded-md flex items-center justify-center text-gray-100 ${className}`}
      {...rest}>
      {children}
    </button>
  )
}

export { Button }