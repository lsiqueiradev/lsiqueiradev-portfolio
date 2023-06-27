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
      className={`text-2xl md:text-base font-bold lg:font-normal text-gray-300 hover:text-violet-600 
      ${isActive && 'text-violet-600'}`}
    >
      {text}
    </Link>
  )
}
