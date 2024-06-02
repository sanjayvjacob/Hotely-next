import Link from "next/link"

const links = [
  {
    path: '/',
    pathname: 'Home'
  },
  {
    path: '/find',
    pathname: 'Find Hotel'
  },
  {
    path: '/about',
    pathname: 'About Us'
  },
  {
    path: '/contact',
    pathname: 'Contact Us'
  },
]

const Nav = ({containerStyles, listStyles}) => {
  return (
    <nav className={`${containerStyles}`}>
      <ul className={`${listStyles}`}>{links.map((link, index)=>{
        return (
          <li key={index}>
            <Link href={link.path}>{link.pathname}</Link>
          </li>
        )
      })}
      </ul>
    </nav>
  )
}

export default Nav