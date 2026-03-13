import { forwardRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { menuItems } from "./MenuItems";
import PropTypes from 'prop-types';

function MobileMenu ({ isOpen, onClose, className = '' }, ref){
  useEffect(() => {
      document.body.style.overflow = isOpen ? 'hidden' : 'auto';  
      return () => {
          document.body.style.overflow = 'auto';
      };
  }, [isOpen]);

  if (!isOpen) return null;   

  return (
    <div 
      ref={ ref } 
      className={`
        bg-background/60 backdrop-blur-lg md:hidden fixed inset-0 top-18 z-50 
        shadow-lg animate-fade-in ${ className }
      `}
    >
      <div className="h-full flex flex-col justify-center items-center gap-4 p-5">
        {menuItems.map(item => (
          <NavLink
            key={ item.id }
            to={ item.to }
            className="w-full py-2 px-3 rounded-full transition-colors text-xl font-medium text-center bg-button/10 hover:bg-button/20 cursor-pointer"
            onClick={ onClose }
          >
            { item.label }
          </NavLink>
        ))}
      </div>
    </div>
  );
}

MobileMenu.prototype = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default forwardRef(MobileMenu);