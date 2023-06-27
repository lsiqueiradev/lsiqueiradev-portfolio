import { ReactNode } from 'react'

interface TitleProps {
  children: ReactNode
}

export function Title({ children }: TitleProps) {
  return <h1 className="text-5xl font-bold text-gray-200 mb-3">{children}</h1>
}
