import { ReactNode } from 'react'

interface DescriptionPropsProps {
  children: ReactNode
  className?: string
}

export function Description({
  children,
  className = '',
}: DescriptionPropsProps) {
  return (
    <p className={`text-lg text-gray-300 max-w-xl ${className}`}>{children}</p>
  )
}
