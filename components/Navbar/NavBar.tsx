import Link from 'next/link'

const NavBar = () => {
  return (
    <div
      className="bg-background-primary fixed top-0 left-0 right-0 z-50 w-screen bg-dar-bg bg-opacity-90 backdrop-blur-2xl 
    backdrop-opacity-50 backdrop-filter"
    >
      <header className="mx-auto flex max-w-contain items-center justify-between bg-transparent px-2 py-4 md:px-5 md:py-8">
        <Link href="/">
          <a>
            <img
              className="w-12 md:mr-20 md:w-16"
              src="/logo.png"
              alt="Davies Esiro logo"
            />
          </a>
        </Link>
        <nav className="md:mr-auto">
          <NavLink href="/#home">Home</NavLink>
          <NavLink href="/">Works</NavLink>
          <NavLink href="/">Contact</NavLink>
        </nav>
      </header>
    </div>
  )
}

const NavLink = ({ children, href }: { href: string; children: any }) => {
  return (
    <Link href={href}>
      <a className="p-2 text-sm text-gray-400 hover:text-accent-variant md:ml-5 md:text-base">
        {' '}
        {'<'}
        {children}
        {'/>'}{' '}
      </a>
    </Link>
  )
}

export default NavBar
