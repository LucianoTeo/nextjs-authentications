import { HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  padding?: number
  title?: string
  children: React.ReactNode
}

function Card({ padding, className, children, title, ...rest }: CardProps) {
  return (
    <div className={`
      h-full
      p-8 
      border border-gray-200
      bg-white 
      rounded-lg 
      ${className}`}
      {...rest}
    >
      {title && <strong> {title} </strong>}
      {children}
    </div>
  )
}

export { Card }