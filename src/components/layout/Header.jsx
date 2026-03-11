import { useRef, useState } from "react";
import { DesktopMenu, MobileMenu, MenuToggle, ThemeToggle } from "@components/navigation";
import { Logo } from "@components/common";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className='w-full px-5 py-3 flex justify-center items-center'>
      <nav className='w-full max-w-7xl'>
        <div className="container mx-auto flex justify-between items-center">
          <Logo />
          
          <DesktopMenu />
          
          <div className="flex items-center gap-5">
            <ThemeToggle />
            <MenuToggle isOpen={ isMenuOpen } onClick={toggleMenu} />
          </div>
        </div>
        
        <MobileMenu 
          ref={ menuRef }
          isOpen={ isMenuOpen }
          onClose={ closeMenu }
        />
      </nav>
    </header>
  );
}

export default Header;