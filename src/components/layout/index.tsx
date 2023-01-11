import { HTMLAttributes } from "react"

interface LayoutProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

function Layout({ children, ...rest }: LayoutProps) {
  return (
    <main {...rest}>
      {children}
    </main>
  )
}

export { Layout }