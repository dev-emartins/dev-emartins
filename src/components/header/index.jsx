import { useRef, useEffect, useState } from "react"
import { FaBars, FaCircleXmark, FaMoon, FaSun } from "react-icons/fa6"
import { Link, NavLink } from "react-router-dom"
import Logo from "./Logo"

function Header() {
  const [theme, setTheme] = useState(() => localStorage.getItem('portTheme') || 'light')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    localStorage.setItem('portTheme', theme)
    document.documentElement.classList.toggle('dark', theme === 'light')
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  const menu_itens = [
    { name: 'Início', path: '/' },
    { name: 'Sobre', path: '/about' },
    { name: 'Habilidades', path: '/skills' },
    { name: 'Contato', path: '/contact' }
  ]

  return (
    <header className='w-full px-5 py-3 flex justify-center items-center'>
      <nav className='w-full max-w-7xl'>
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/">
            <Logo />
          </Link>

          <div className="hidden py-3 md:flex items-center gap-4">
            {menu_itens.map(item => (
              <NavLink
                key={item.name}
                to={item.path}
                className="hover:text-(--foreground)/60"
              >
                {item.name}
              </NavLink>
            ))}            
          </div>
          <div className="flex items-center gap-5">            
            <button
              onClick={toggleTheme}
              className="p-2 text-xl rounded-full transition-colors hover:bg-(--foreground)/20 cursor-pointer"
            >
              {theme === 'dark' 
                ? <FaSun />
                : <FaMoon /> 
              }
            </button>            
            <button
              className="md:hidden text-(--accent) cursor-pointer"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <FaCircleXmark className='text-2xl' /> : <FaBars className='text-2xl' />}
            </button>
          </div>          
        </div>
        
        {isMenuOpen && (
          <div ref={ menuRef } className="bg-(--background) md:hidden w-full h-1/3 absolute left-0 z-50 px-5 py-3 shadow-lg">
            <div className="h-full flex flex-col justify-center items-center gap-8">
              {menu_itens.map(item => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className="text-xl hover:text-(--foreground)/60"
                  onClick={toggleMenu}
                >
                  {item.name}
                </NavLink>
              ))}              
            </div>
          </div>
        )}          
      </nav>
    </header>
  )
}

export default Header