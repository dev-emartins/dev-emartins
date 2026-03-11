// src/components/navigation/MobileMenu.jsx
import { forwardRef } from "react";
import { NavLink } from "react-router-dom";
import { menuItems } from "./MenuItems";
import PropTypes from 'prop-types';

const MobileMenu = forwardRef(({ isOpen, onClose, className = '' }, ref) => {
  if (!isOpen) return null;

  return (
    <div 
      ref={ref} 
      className={`
        bg-background/60 backdrop-blur-xl md:hidden fixed inset-0 top-18 z-50 
        shadow-lg animate-fade-in ${className}
      `}
    >
      <div className="h-full flex flex-col justify-center items-center gap-4 p-5">
        {menuItems.map(item => (
          <NavLink
            key={ item.id }
            to={ item.to }
            className="w-full p-2 rounded-full transition-colors text-xl text-center bg-button/10 cursor-pointer"
            onClick={onClose}
          >
            { item.label }
          </NavLink>
        ))}
      </div>
    </div>
  );
});

MobileMenu.displayName = 'MobileMenu';

MobileMenu.prototype = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default MobileMenu;