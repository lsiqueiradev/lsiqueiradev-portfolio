import Link, { LinkProps } from 'next/link'

interface NavItemProps extends LinkProps {
  text: string
  href: string
  isActive: boolean
}

export function NavItem({
  text,
  isActive,
  href,
  ...restLinkProps
}: NavItemProps) {
  return (
    <Link
      href={href}
      {...restLinkProps}
      className={`text-md text-gray-300 hover:text-violet-600 
      ${isActive && 'text-violet-600'}`}
    >
      {text}
    </Link>
  )
}
