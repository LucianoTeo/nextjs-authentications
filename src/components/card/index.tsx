import { HTMLAttributes } from "react"

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

function Card({ children, ...rest }: CardProps) {
  return (
    <div {...rest}>
      {children}
    </div>
  )
}

export { Card }