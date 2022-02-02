import Link from "next/link";

const NavBar = () => {
  return (
    <div className="bg-dar-bg ">
      <header className="max-w-contain md:px-5 md:py-8 flex items-center justify-between px-2 py-4 mx-auto">
        <Link href="/">
          <a>
            <img
              className="md:mr-20 md:w-16 w-12"
              src="/logo.png"
              alt="Davies Esiro logo"
            />
          </a>
        </Link>
        <nav className="md:mr-auto">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/">Works</NavLink>
          <NavLink href="/">Contact</NavLink>
        </nav>
      </header>
    </div>
  );
};

const NavLink = ({ children, href }: { href: string; children: any }) => {
  return (
    <Link href={href}>
      <a className="hover:text-accent-variant md:ml-5 md:text-base p-2 text-sm text-gray-400">
        {" "}
        {"<"}
        {children}
        {"/>"}{" "}
      </a>
    </Link>
  );
};

export default NavBar;
